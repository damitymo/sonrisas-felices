import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';
import { Reporte } from './entities/reporte.entity';

@Injectable()
export class ReportesService {
  constructor(
    @InjectRepository(Reporte)
    private readonly reportesRepository: Repository<Reporte>,
  ) {}

  async create(createReporteDto: CreateReporteDto): Promise<Reporte> {
    const reporte = this.reportesRepository.create(createReporteDto);
    return this.reportesRepository.save(reporte);
  }

  async findAll(): Promise<Reporte[]> {
    return this.reportesRepository.find();
  }

  async findOne(id: number): Promise<Reporte> {
    const reporte = await this.reportesRepository.findOneBy({ id });
    if (!reporte) {
      throw new NotFoundException(`Reporte con ID ${id} no encontrado`);
    }
    return reporte;
  }

  async update(id: number, updateReporteDto: UpdateReporteDto): Promise<Reporte> {
    const reporte = await this.reportesRepository.preload({
      id,
      ...updateReporteDto,
    });
    if (!reporte) {
      throw new NotFoundException(`Reporte con ID ${id} no encontrado`);
    }
    return this.reportesRepository.save(reporte);
  }

  async remove(id: number): Promise<void> {
    const reporte = await this.findOne(id);
    await this.reportesRepository.remove(reporte);
  }
}