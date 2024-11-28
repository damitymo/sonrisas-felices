import { Test, TestingModule } from '@nestjs/testing';
import { ModulosAlimentosService } from './modulos-alimentos.service';

describe('ModulosAlimentosService', () => {
  let service: ModulosAlimentosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModulosAlimentosService],
    }).compile();

    service = module.get<ModulosAlimentosService>(ModulosAlimentosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
