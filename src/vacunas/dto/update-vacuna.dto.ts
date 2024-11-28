import { PartialType } from '@nestjs/mapped-types';
import { CreateVacunaDto } from './create-vacuna.dto';

export class UpdateVacunaDto extends PartialType(CreateVacunaDto) {}
