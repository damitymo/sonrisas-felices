import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfesionalDto } from './dto/create-profesional.dto';
import { UpdateProfesionalDto } from './dto/update-profesional.dto';
import { Profesional } from './entities/profesional.entity';

@Injectable()
export class ProfesionalService {
  constructor(
    @InjectRepository(Profesional)
    private readonly profesionalRepository: Repository<Profesional>,
  ) {}

  async create(createProfesionalDto: CreateProfesionalDto): Promise<Profesional> {
    const profesional = this.profesionalRepository.create(createProfesionalDto);
    return this.profesionalRepository.save(profesional);
  }

  async findAll(): Promise<Profesional[]> {
    return this.profesionalRepository.find();
  }

  async findOne(id: number): Promise<Profesional> {
    const profesional = await this.profesionalRepository.findOne(id);
    if (!profesional) {
      throw new NotFoundException(`Profesional con ID ${id} no encontrado`);
    }
    return profesional;
  }

  async update(id: number, updateProfesionalDto: UpdateProfesionalDto): Promise<Profesional> {
    const profesional = await this.profesionalRepository.preload({
      id,
      ...updateProfesionalDto,
    });
    if (!profesional) {
      throw new NotFoundException(`Profesional con ID ${id} no encontrado`);
    }
    return this.profesionalRepository.save(profesional);
  }

  async remove(id: number): Promise<void> {
    const profesional = await this.findOne(id);
    await this.profesionalRepository.remove(profesional);
  }
}