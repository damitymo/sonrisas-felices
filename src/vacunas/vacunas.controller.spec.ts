import { Test, TestingModule } from '@nestjs/testing';
import { VacunasController } from './vacunas.controller';
import { VacunasService } from './vacunas.service';

describe('VacunasController', () => {
  let controller: VacunasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VacunasController],
      providers: [VacunasService],
    }).compile();

    controller = module.get<VacunasController>(VacunasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
