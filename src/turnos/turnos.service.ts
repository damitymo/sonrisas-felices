import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTurnoDto } from './dto/create-turno.dto';
import { UpdateTurnoDto } from './dto/update-turno.dto';
import { Turno } from './entities/turno.entity';

@Injectable()
export class TurnosService {
  constructor(
    @InjectRepository(Turno)
    private readonly turnosRepository: Repository<Turno>,
  ) {}

  async create(createTurnoDto: CreateTurnoDto): Promise<Turno> {
    const turno = this.turnosRepository.create(createTurnoDto);
    return this.turnosRepository.save(turno);
  }

  async findAll(): Promise<Turno[]> {
    return this.turnosRepository.find();
  }

  async findOne(id: number): Promise<Turno> {
    const turno = await this.turnosRepository.findOneBy({ id });
    if (!turno) {
      throw new NotFoundException(`Turno con ID ${id} no encontrado`);
    }
    return turno;
  }

  async update(id: number, updateTurnoDto: UpdateTurnoDto): Promise<Turno> {
    const turno = await this.turnosRepository.preload({
      id,
      ...updateTurnoDto,
    });
    if (!turno) {
      throw new NotFoundException(`Turno con ID ${id} no encontrado`);
    }
    return this.turnosRepository.save(turno);
  }

  async remove(id: number): Promise<void> {
    const turno = await this.findOne(id);
    await this.turnosRepository.remove(turno);
  }
}