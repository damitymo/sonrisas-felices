import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfesionalService } from './profesional.service';
import { ProfesionalController } from './profesional.controller';
import { Profesional } from './entities/profesional.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profesional])],
  controllers: [ProfesionalController],
  providers: [ProfesionalService],
})
export class ProfesionalModule {}