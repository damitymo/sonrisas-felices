import { Test, TestingModule } from '@nestjs/testing';
import { ProfesionalService } from './profesional.service';

describe('ProfesionalService', () => {
  let service: ProfesionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfesionalService],
    }).compile();

    service = module.get<ProfesionalService>(ProfesionalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
