import { Module } from '@nestjs/common';
import { EstudiosLaboratorioService } from './estudios-laboratorio.service';
import { EstudiosLaboratorioController } from './estudios-laboratorio.controller';

@Module({
  controllers: [EstudiosLaboratorioController],
  providers: [EstudiosLaboratorioService],
})
export class EstudiosLaboratorioModule {}
