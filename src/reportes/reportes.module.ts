import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportesService } from './reportes.service';
import { ReportesController } from './reportes.controller';
import { Reporte } from './entities/reporte.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reporte])],
  controllers: [ReportesController],
  providers: [ReportesService],
})
export class ReportesModule {}