import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReportesService } from './reportes.service';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('reportes')
@Controller('reportes')
export class ReportesController {
  constructor(private readonly reportesService: ReportesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo reporte' })
  @ApiResponse({ status: 201, description: 'El reporte ha sido creado.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  create(@Body() createReporteDto: CreateReporteDto) {
    return this.reportesService.create(createReporteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los reportes' })
  @ApiResponse({ status: 200, description: 'Lista de reportes.' })
  findAll() {
    return this.reportesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un reporte por ID' })
  @ApiResponse({ status: 200, description: 'Detalles del reporte.' })
  @ApiResponse({ status: 404, description: 'Reporte no encontrado.' })
  findOne(@Param('id') id: string) {
    return this.reportesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un reporte por ID' })
  @ApiResponse({ status: 200, description: 'El reporte ha sido actualizado.' })
  @ApiResponse({ status: 404, description: 'Reporte no encontrado.' })
  update(@Param('id') id: string, @Body() updateReporteDto: UpdateReporteDto) {
    return this.reportesService.update(+id, updateReporteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un reporte por ID' })
  @ApiResponse({ status: 200, description: 'El reporte ha sido eliminado.' })
  @ApiResponse({ status: 404, description: 'Reporte no encontrado.' })
  remove(@Param('id') id: string) {
    return this.reportesService.remove(+id);
  }
}