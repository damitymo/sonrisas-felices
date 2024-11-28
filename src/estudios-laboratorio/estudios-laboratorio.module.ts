import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudiosLaboratorioService } from './estudios-laboratorio.service';
import { EstudiosLaboratorioController } from './estudios-laboratorio.controller';
import { EstudioLaboratorio } from './entities/estudios-laboratorio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EstudioLaboratorio])],
  controllers: [EstudiosLaboratorioController],
  providers: [EstudiosLaboratorioService],
})
export class EstudiosLaboratorioModule {}