import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('pacientes')
@Controller('pacientes')
export class PacientesController {
  constructor(private readonly pacientesService: PacientesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo paciente' })
  @ApiResponse({ status: 201, description: 'El paciente ha sido creado.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  create(@Body() createPacienteDto: CreatePacienteDto) {
    return this.pacientesService.create(createPacienteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los pacientes' })
  @ApiResponse({ status: 200, description: 'Lista de pacientes.' })
  findAll() {
    return this.pacientesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un paciente por ID' })
  @ApiResponse({ status: 200, description: 'Detalles del paciente.' })
  @ApiResponse({ status: 404, description: 'Paciente no encontrado.' })
  findOne(@Param('id') id: string) {
    return this.pacientesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un paciente por ID' })
  @ApiResponse({ status: 200, description: 'El paciente ha sido actualizado.' })
  @ApiResponse({ status: 404, description: 'Paciente no encontrado.' })
  update(@Param('id') id: string, @Body() updatePacienteDto: UpdatePacienteDto) {
    return this.pacientesService.update(+id, updatePacienteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un paciente por ID' })
  @ApiResponse({ status: 200, description: 'El paciente ha sido eliminado.' })
  @ApiResponse({ status: 404, description: 'Paciente no encontrado.' })
  remove(@Param('id') id: string) {
    return this.pacientesService.remove(+id);
  }
}