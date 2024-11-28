import { Module } from '@nestjs/common';
import { VacunasService } from './vacunas.service';
import { VacunasController } from './vacunas.controller';

@Module({
  controllers: [VacunasController],
  providers: [VacunasService],
})
export class VacunasModule {}
