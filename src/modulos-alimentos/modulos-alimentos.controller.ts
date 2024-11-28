import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModulosAlimentosService } from './modulos-alimentos.service';
import { CreateModulosAlimentoDto } from './dto/create-modulos-alimento.dto';
import { UpdateModulosAlimentoDto } from './dto/update-modulos-alimento.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('modulos-alimentos')
@Controller('modulos-alimentos')
export class ModulosAlimentosController {
  constructor(private readonly modulosAlimentosService: ModulosAlimentosService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo módulo alimenticio' })
  @ApiResponse({ status: 201, description: 'El módulo alimenticio ha sido creado.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  create(@Body() createModulosAlimentoDto: CreateModulosAlimentoDto) {
    return this.modulosAlimentosService.create(createModulosAlimentoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los módulos alimenticios' })
  @ApiResponse({ status: 200, description: 'Lista de módulos alimenticios.' })
  findAll() {
    return this.modulosAlimentosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un módulo alimenticio por ID' })
  @ApiResponse({ status: 200, description: 'Detalles del módulo alimenticio.' })
  @ApiResponse({ status: 404, description: 'Módulo alimenticio no encontrado.' })
  findOne(@Param('id') id: string) {
    return this.modulosAlimentosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un módulo alimenticio por ID' })
  @ApiResponse({ status: 200, description: 'El módulo alimenticio ha sido actualizado.' })
  @ApiResponse({ status: 404, description: 'Módulo alimenticio no encontrado.' })
  update(@Param('id') id: string, @Body() updateModulosAlimentoDto: UpdateModulosAlimentoDto) {
    return this.modulosAlimentosService.update(+id, updateModulosAlimentoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un módulo alimenticio por ID' })
  @ApiResponse({ status: 200, description: 'El módulo alimenticio ha sido eliminado.' })
  @ApiResponse({ status: 404, description: 'Módulo alimenticio no encontrado.' })
  remove(@Param('id') id: string) {
    return this.modulosAlimentosService.remove(+id);
  }
}