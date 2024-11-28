import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModulosAlimentosService } from './modulos-alimentos.service';
import { CreateModulosAlimentoDto } from './dto/create-modulos-alimento.dto';
import { UpdateModulosAlimentoDto } from './dto/update-modulos-alimento.dto';

@Controller('modulos-alimentos')
export class ModulosAlimentosController {
  constructor(private readonly modulosAlimentosService: ModulosAlimentosService) {}

  @Post()
  create(@Body() createModulosAlimentoDto: CreateModulosAlimentoDto) {
    return this.modulosAlimentosService.create(createModulosAlimentoDto);
  }

  @Get()
  findAll() {
    return this.modulosAlimentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modulosAlimentosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModulosAlimentoDto: UpdateModulosAlimentoDto) {
    return this.modulosAlimentosService.update(+id, updateModulosAlimentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modulosAlimentosService.remove(+id);
  }
}
