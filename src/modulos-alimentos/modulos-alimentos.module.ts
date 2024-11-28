import { Module } from '@nestjs/common';
import { ModulosAlimentosService } from './modulos-alimentos.service';
import { ModulosAlimentosController } from './modulos-alimentos.controller';

@Module({
  controllers: [ModulosAlimentosController],
  providers: [ModulosAlimentosService],
})
export class ModulosAlimentosModule {}
