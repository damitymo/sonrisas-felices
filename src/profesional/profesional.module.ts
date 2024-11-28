import { Module } from '@nestjs/common';
import { ProfesionalService } from './profesional.service';
import { ProfesionalController } from './profesional.controller';

@Module({
  controllers: [ProfesionalController],
  providers: [ProfesionalService],
})
export class ProfesionalModule {}
