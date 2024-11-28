import { Injectable } from '@nestjs/common';
import { CreateProfesionalDto } from './dto/create-profesional.dto';
import { UpdateProfesionalDto } from './dto/update-profesional.dto';

@Injectable()
export class ProfesionalService {
  create(createProfesionalDto: CreateProfesionalDto) {
    return 'This action adds a new profesional';
  }

  findAll() {
    return `This action returns all profesional`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profesional`;
  }

  update(id: number, updateProfesionalDto: UpdateProfesionalDto) {
    return `This action updates a #${id} profesional`;
  }

  remove(id: number) {
    return `This action removes a #${id} profesional`;
  }
}
