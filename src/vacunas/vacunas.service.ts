import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVacunaDto } from './dto/create-vacuna.dto';
import { UpdateVacunaDto } from './dto/update-vacuna.dto';
import { Vacuna } from './entities/vacuna.entity';

@Injectable()
export class VacunasService {
  constructor(
    @InjectRepository(Vacuna)
    private readonly vacunasRepository: Repository<Vacuna>,
  ) {}

  async create(createVacunaDto: CreateVacunaDto): Promise<Vacuna> {
    const vacuna = this.vacunasRepository.create(createVacunaDto);
    return this.vacunasRepository.save(vacuna);
  }

  async findAll(): Promise<Vacuna[]> {
    return this.vacunasRepository.find();
  }

  async findOne(id: number): Promise<Vacuna> {
    const vacuna = await this.vacunasRepository.findOneBy({ id });
    if (!vacuna) {
      throw new NotFoundException(`Vacuna con ID ${id} no encontrada`);
    }
    return vacuna;
  }

  async update(id: number, updateVacunaDto: UpdateVacunaDto): Promise<Vacuna> {
    const vacuna = await this.vacunasRepository.preload({
      id,
      ...updateVacunaDto,
    });
    if (!vacuna) {
      throw new NotFoundException(`Vacuna con ID ${id} no encontrada`);
    }
    return this.vacunasRepository.save(vacuna);
  }

  async remove(id: number): Promise<void> {
    const vacuna = await this.findOne(id);
    await this.vacunasRepository.remove(vacuna);
  }
}