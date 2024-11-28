import { Test, TestingModule } from '@nestjs/testing';
import { ModulosAlimentosController } from './modulos-alimentos.controller';
import { ModulosAlimentosService } from './modulos-alimentos.service';

describe('ModulosAlimentosController', () => {
  let controller: ModulosAlimentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModulosAlimentosController],
      providers: [ModulosAlimentosService],
    }).compile();

    controller = module.get<ModulosAlimentosController>(ModulosAlimentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
