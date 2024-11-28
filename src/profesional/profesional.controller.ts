import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfesionalService } from './profesional.service';
import { CreateProfesionalDto } from './dto/create-profesional.dto';
import { UpdateProfesionalDto } from './dto/update-profesional.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('profesional')
@Controller('profesional')
export class ProfesionalController {
  constructor(private readonly profesionalService: ProfesionalService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo profesional' })
  @ApiResponse({ status: 201, description: 'El profesional ha sido creado.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  create(@Body() createProfesionalDto: CreateProfesionalDto) {
    return this.profesionalService.create(createProfesionalDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los profesionales' })
  @ApiResponse({ status: 200, description: 'Lista de profesionales.' })
  findAll() {
    return this.profesionalService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un profesional por ID' })
  @ApiResponse({ status: 200, description: 'Detalles del profesional.' })
  @ApiResponse({ status: 404, description: 'Profesional no encontrado.' })
  findOne(@Param('id') id: string) {
    return this.profesionalService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un profesional por ID' })
  @ApiResponse({ status: 200, description: 'El profesional ha sido actualizado.' })
  @ApiResponse({ status: 404, description: 'Profesional no encontrado.' })
  update(@Param('id') id: string, @Body() updateProfesionalDto: UpdateProfesionalDto) {
    return this.profesionalService.update(+id, updateProfesionalDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un profesional por ID' })
  @ApiResponse({ status: 200, description: 'El profesional ha sido eliminado.' })
  @ApiResponse({ status: 404, description: 'Profesional no encontrado.' })
  remove(@Param('id') id: string) {
    return this.profesionalService.remove(+id);
  }
}