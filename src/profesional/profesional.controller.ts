import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfesionalService } from './profesional.service';
import { CreateProfesionalDto } from './dto/create-profesional.dto';
import { UpdateProfesionalDto } from './dto/update-profesional.dto';

@Controller('profesional')
export class ProfesionalController {
  constructor(private readonly profesionalService: ProfesionalService) {}

  @Post()
  create(@Body() createProfesionalDto: CreateProfesionalDto) {
    return this.profesionalService.create(createProfesionalDto);
  }

  @Get()
  findAll() {
    return this.profesionalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profesionalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfesionalDto: UpdateProfesionalDto) {
    return this.profesionalService.update(+id, updateProfesionalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profesionalService.remove(+id);
  }
}
