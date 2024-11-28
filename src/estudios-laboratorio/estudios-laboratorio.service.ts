import { Injectable } from '@nestjs/common';
import { CreateEstudiosLaboratorioDto } from './dto/create-estudios-laboratorio.dto';
import { UpdateEstudiosLaboratorioDto } from './dto/update-estudios-laboratorio.dto';

@Injectable()
export class EstudiosLaboratorioService {
  create(createEstudiosLaboratorioDto: CreateEstudiosLaboratorioDto) {
    return 'This action adds a new estudiosLaboratorio';
  }

  findAll() {
    return `This action returns all estudiosLaboratorio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estudiosLaboratorio`;
  }

  update(id: number, updateEstudiosLaboratorioDto: UpdateEstudiosLaboratorioDto) {
    return `This action updates a #${id} estudiosLaboratorio`;
  }

  remove(id: number) {
    return `This action removes a #${id} estudiosLaboratorio`;
  }
}
