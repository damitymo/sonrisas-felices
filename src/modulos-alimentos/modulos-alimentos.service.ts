import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateModulosAlimentoDto } from './dto/create-modulos-alimento.dto';
import { UpdateModulosAlimentoDto } from './dto/update-modulos-alimento.dto';
import { ModuloAlimenticio } from './entities/modulos-alimento.entity';

@Injectable()
export class ModulosAlimentosService {
  constructor(
    @InjectRepository(ModuloAlimenticio)
    private readonly modulosAlimentosRepository: Repository<ModuloAlimenticio>,
  ) {}

  async create(createModulosAlimentoDto: CreateModulosAlimentoDto): Promise<ModuloAlimenticio> {
    const moduloAlimenticio = this.modulosAlimentosRepository.create(createModulosAlimentoDto);
    return this.modulosAlimentosRepository.save(moduloAlimenticio);
  }

  async findAll(): Promise<ModuloAlimenticio[]> {
    return this.modulosAlimentosRepository.find();
  }

  async findOne(id: number): Promise<ModuloAlimenticio> {
    const moduloAlimenticio = await this.modulosAlimentosRepository.findOneBy({ id });
    if (!moduloAlimenticio) {
      throw new NotFoundException(`Módulo alimenticio con ID ${id} no encontrado`);
    }
    return moduloAlimenticio;
  }

  async update(id: number, updateModulosAlimentoDto: UpdateModulosAlimentoDto): Promise<ModuloAlimenticio> {
    const moduloAlimenticio = await this.modulosAlimentosRepository.preload({
      id,
      ...updateModulosAlimentoDto,
    });
    if (!moduloAlimenticio) {
      throw new NotFoundException(`Módulo alimenticio con ID ${id} no encontrado`);
    }
    return this.modulosAlimentosRepository.save(moduloAlimenticio);
  }

  async remove(id: number): Promise<void> {
    const moduloAlimenticio = await this.findOne(id);
    await this.modulosAlimentosRepository.remove(moduloAlimenticio);
  }
}