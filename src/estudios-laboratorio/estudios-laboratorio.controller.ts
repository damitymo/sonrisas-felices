import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstudiosLaboratorioService } from './estudios-laboratorio.service';
import { CreateEstudiosLaboratorioDto } from './dto/create-estudios-laboratorio.dto';
import { UpdateEstudiosLaboratorioDto } from './dto/update-estudios-laboratorio.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('estudios-laboratorio')
@Controller('estudios-laboratorio')
export class EstudiosLaboratorioController {
  constructor(private readonly estudiosLaboratorioService: EstudiosLaboratorioService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo estudio de laboratorio' })
  @ApiResponse({ status: 201, description: 'El estudio de laboratorio ha sido creado.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  create(@Body() createEstudiosLaboratorioDto: CreateEstudiosLaboratorioDto) {
    return this.estudiosLaboratorioService.create(createEstudiosLaboratorioDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los estudios de laboratorio' })
  @ApiResponse({ status: 200, description: 'Lista de estudios de laboratorio.' })
  findAll() {
    return this.estudiosLaboratorioService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un estudio de laboratorio por ID' })
  @ApiResponse({ status: 200, description: 'Detalles del estudio de laboratorio.' })
  @ApiResponse({ status: 404, description: 'Estudio de laboratorio no encontrado.' })
  findOne(@Param('id') id: string) {
    return this.estudiosLaboratorioService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un estudio de laboratorio por ID' })
  @ApiResponse({ status: 200, description: 'El estudio de laboratorio ha sido actualizado.' })
  @ApiResponse({ status: 404, description: 'Estudio de laboratorio no encontrado.' })
  update(@Param('id') id: string, @Body() updateEstudiosLaboratorioDto: UpdateEstudiosLaboratorioDto) {
    return this.estudiosLaboratorioService.update(+id, updateEstudiosLaboratorioDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un estudio de laboratorio por ID' })
  @ApiResponse({ status: 200, description: 'El estudio de laboratorio ha sido eliminado.' })
  @ApiResponse({ status: 404, description: 'Estudio de laboratorio no encontrado.' })
  remove(@Param('id') id: string) {
    return this.estudiosLaboratorioService.remove(+id);
  }
}