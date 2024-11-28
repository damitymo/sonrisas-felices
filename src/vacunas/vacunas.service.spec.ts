import { Test, TestingModule } from '@nestjs/testing';
import { VacunasService } from './vacunas.service';

describe('VacunasService', () => {
  let service: VacunasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VacunasService],
    }).compile();

    service = module.get<VacunasService>(VacunasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
