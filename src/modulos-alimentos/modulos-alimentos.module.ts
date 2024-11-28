import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModulosAlimentosService } from './modulos-alimentos.service';
import { ModulosAlimentosController } from './modulos-alimentos.controller';
import { ModuloAlimenticio } from './entities/modulos-alimento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ModuloAlimenticio])],
  controllers: [ModulosAlimentosController],
  providers: [ModulosAlimentosService],
})
export class ModulosAlimentosModule {}