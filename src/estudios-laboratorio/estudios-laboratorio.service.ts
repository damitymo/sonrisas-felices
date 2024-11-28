import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEstudiosLaboratorioDto } from './dto/create-estudios-laboratorio.dto';
import { UpdateEstudiosLaboratorioDto } from './dto/update-estudios-laboratorio.dto';
import { EstudioLaboratorio } from './entities/estudios-laboratorio.entity';

@Injectable()
export class EstudiosLaboratorioService {
  constructor(
    @InjectRepository(EstudioLaboratorio)
    private readonly estudiosLaboratorioRepository: Repository<EstudioLaboratorio>,
  ) {}

  async create(createEstudiosLaboratorioDto: CreateEstudiosLaboratorioDto): Promise<EstudioLaboratorio> {
    const estudioLaboratorio = this.estudiosLaboratorioRepository.create(createEstudiosLaboratorioDto);
    return this.estudiosLaboratorioRepository.save(estudioLaboratorio);
  }

  async findAll(): Promise<EstudioLaboratorio[]> {
    return this.estudiosLaboratorioRepository.find();
  }

  async findOne(id: number): Promise<EstudioLaboratorio> {
    const estudioLaboratorio = await this.estudiosLaboratorioRepository.findOneBy({ id });
    if (!estudioLaboratorio) {
      throw new NotFoundException(`Estudio de laboratorio con ID ${id} no encontrado`);
    }
    return estudioLaboratorio;
  }

  async update(id: number, updateEstudiosLaboratorioDto: UpdateEstudiosLaboratorioDto): Promise<EstudioLaboratorio> {
    const estudioLaboratorio = await this.estudiosLaboratorioRepository.preload({
      id,
      ...updateEstudiosLaboratorioDto,
    });
    if (!estudioLaboratorio) {
      throw new NotFoundException(`Estudio de laboratorio con ID ${id} no encontrado`);
    }
    return this.estudiosLaboratorioRepository.save(estudioLaboratorio);
  }

  async remove(id: number): Promise<void> {
    const estudioLaboratorio = await this.findOne(id);
    await this.estudiosLaboratorioRepository.remove(estudioLaboratorio);
  }
}