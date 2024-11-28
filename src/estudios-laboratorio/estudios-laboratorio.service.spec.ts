import { Test, TestingModule } from '@nestjs/testing';
import { EstudiosLaboratorioService } from './estudios-laboratorio.service';

describe('EstudiosLaboratorioService', () => {
  let service: EstudiosLaboratorioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstudiosLaboratorioService],
    }).compile();

    service = module.get<EstudiosLaboratorioService>(EstudiosLaboratorioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
