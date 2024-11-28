import { Test, TestingModule } from '@nestjs/testing';
import { EstudiosLaboratorioController } from './estudios-laboratorio.controller';
import { EstudiosLaboratorioService } from './estudios-laboratorio.service';

describe('EstudiosLaboratorioController', () => {
  let controller: EstudiosLaboratorioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstudiosLaboratorioController],
      providers: [EstudiosLaboratorioService],
    }).compile();

    controller = module.get<EstudiosLaboratorioController>(EstudiosLaboratorioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
