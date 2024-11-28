import { Injectable } from '@nestjs/common';
import { CreateModulosAlimentoDto } from './dto/create-modulos-alimento.dto';
import { UpdateModulosAlimentoDto } from './dto/update-modulos-alimento.dto';

@Injectable()
export class ModulosAlimentosService {
  create(createModulosAlimentoDto: CreateModulosAlimentoDto) {
    return 'This action adds a new modulosAlimento';
  }

  findAll() {
    return `This action returns all modulosAlimentos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} modulosAlimento`;
  }

  update(id: number, updateModulosAlimentoDto: UpdateModulosAlimentoDto) {
    return `This action updates a #${id} modulosAlimento`;
  }

  remove(id: number) {
    return `This action removes a #${id} modulosAlimento`;
  }
}
