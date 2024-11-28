import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstudiosLaboratorioService } from './estudios-laboratorio.service';
import { CreateEstudiosLaboratorioDto } from './dto/create-estudios-laboratorio.dto';
import { UpdateEstudiosLaboratorioDto } from './dto/update-estudios-laboratorio.dto';

@Controller('estudios-laboratorio')
export class EstudiosLaboratorioController {
  constructor(private readonly estudiosLaboratorioService: EstudiosLaboratorioService) {}

  @Post()
  create(@Body() createEstudiosLaboratorioDto: CreateEstudiosLaboratorioDto) {
    return this.estudiosLaboratorioService.create(createEstudiosLaboratorioDto);
  }

  @Get()
  findAll() {
    return this.estudiosLaboratorioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estudiosLaboratorioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstudiosLaboratorioDto: UpdateEstudiosLaboratorioDto) {
    return this.estudiosLaboratorioService.update(+id, updateEstudiosLaboratorioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estudiosLaboratorioService.remove(+id);
  }
}
