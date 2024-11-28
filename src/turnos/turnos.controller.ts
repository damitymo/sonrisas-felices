import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TurnosService } from './turnos.service';
import { CreateTurnoDto } from './dto/create-turno.dto';
import { UpdateTurnoDto } from './dto/update-turno.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('turnos')
@Controller('turnos')
export class TurnosController {
  constructor(private readonly turnosService: TurnosService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo turno' })
  @ApiResponse({ status: 201, description: 'El turno ha sido creado.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  create(@Body() createTurnoDto: CreateTurnoDto) {
    return this.turnosService.create(createTurnoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los turnos' })
  @ApiResponse({ status: 200, description: 'Lista de turnos.' })
  findAll() {
    return this.turnosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un turno por ID' })
  @ApiResponse({ status: 200, description: 'Detalles del turno.' })
  @ApiResponse({ status: 404, description: 'Turno no encontrado.' })
  findOne(@Param('id') id: string) {
    return this.turnosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un turno por ID' })
  @ApiResponse({ status: 200, description: 'El turno ha sido actualizado.' })
  @ApiResponse({ status: 404, description: 'Turno no encontrado.' })
  update(@Param('id') id: string, @Body() updateTurnoDto: UpdateTurnoDto) {
    return this.turnosService.update(+id, updateTurnoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un turno por ID' })
  @ApiResponse({ status: 200, description: 'El turno ha sido eliminado.' })
  @ApiResponse({ status: 404, description: 'Turno no encontrado.' })
  remove(@Param('id') id: string) {
    return this.turnosService.remove(+id);
  }
}