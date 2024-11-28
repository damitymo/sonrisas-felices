import { Injectable } from '@nestjs/common';
import { CreateVacunaDto } from './dto/create-vacuna.dto';
import { UpdateVacunaDto } from './dto/update-vacuna.dto';

@Injectable()
export class VacunasService {
  create(createVacunaDto: CreateVacunaDto) {
    return 'This action adds a new vacuna';
  }

  findAll() {
    return `This action returns all vacunas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vacuna`;
  }

  update(id: number, updateVacunaDto: UpdateVacunaDto) {
    return `This action updates a #${id} vacuna`;
  }

  remove(id: number) {
    return `This action removes a #${id} vacuna`;
  }
}
