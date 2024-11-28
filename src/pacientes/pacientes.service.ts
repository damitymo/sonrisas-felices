import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Paciente } from './entities/paciente.entity';

@Injectable()
export class PacientesService {
  constructor(
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>,
  ) {}

  async create(createPacienteDto: CreatePacienteDto): Promise<Paciente> {
    const paciente = this.pacienteRepository.create(createPacienteDto);
    return this.pacienteRepository.save(paciente);
  }

  async findAll(): Promise<Paciente[]> {
    return this.pacienteRepository.find();
  }

  async findOne(id: number): Promise<Paciente> {
    const paciente = await this.pacienteRepository.findOneBy({ id });
    if (!paciente) {
      throw new NotFoundException(`Paciente con ID ${id} no encontrado`);
    }
    return paciente;
  }

  async update(id: number, updatePacienteDto: UpdatePacienteDto): Promise<Paciente> {
    const paciente = await this.pacienteRepository.preload({
      id,
      ...updatePacienteDto,
    });
    if (!paciente) {
      throw new NotFoundException(`Paciente con ID ${id} no encontrado`);
    }
    return this.pacienteRepository.save(paciente);
  }

  async remove(id: number): Promise<void> {
    const paciente = await this.findOne(id);
    await this.pacienteRepository.remove(paciente);
  }
}