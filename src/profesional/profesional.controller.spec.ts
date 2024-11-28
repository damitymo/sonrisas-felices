import { Test, TestingModule } from '@nestjs/testing';
import { ProfesionalController } from './profesional.controller';
import { ProfesionalService } from './profesional.service';

describe('ProfesionalController', () => {
  let controller: ProfesionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfesionalController],
      providers: [ProfesionalService],
    }).compile();

    controller = module.get<ProfesionalController>(ProfesionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
