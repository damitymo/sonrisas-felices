import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VacunasService } from './vacunas.service';
import { VacunasController } from './vacunas.controller';
import { Vacuna } from './entities/vacuna.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vacuna])],
  controllers: [VacunasController],
  providers: [VacunasService],
})
export class VacunasModule {}