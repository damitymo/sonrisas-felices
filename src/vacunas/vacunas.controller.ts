import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VacunasService } from './vacunas.service';
import { CreateVacunaDto } from './dto/create-vacuna.dto';
import { UpdateVacunaDto } from './dto/update-vacuna.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('vacunas')
@Controller('vacunas')
export class VacunasController {
  constructor(private readonly vacunasService: VacunasService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva vacuna' })
  @ApiResponse({ status: 201, description: 'La vacuna ha sido creada.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  create(@Body() createVacunaDto: CreateVacunaDto) {
    return this.vacunasService.create(createVacunaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las vacunas' })
  @ApiResponse({ status: 200, description: 'Lista de vacunas.' })
  findAll() {
    return this.vacunasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una vacuna por ID' })
  @ApiResponse({ status: 200, description: 'Detalles de la vacuna.' })
  @ApiResponse({ status: 404, description: 'Vacuna no encontrada.' })
  findOne(@Param('id') id: string) {
    return this.vacunasService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una vacuna por ID' })
  @ApiResponse({ status: 200, description: 'La vacuna ha sido actualizada.' })
  @ApiResponse({ status: 404, description: 'Vacuna no encontrada.' })
  update(@Param('id') id: string, @Body() updateVacunaDto: UpdateVacunaDto) {
    return this.vacunasService.update(+id, updateVacunaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una vacuna por ID' })
  @ApiResponse({ status: 200, description: 'La vacuna ha sido eliminada.' })
  @ApiResponse({ status: 404, description: 'Vacuna no encontrada.' })
  remove(@Param('id') id: string) {
    return this.vacunasService.remove(+id);
  }
}
