import { PartialType } from '@nestjs/mapped-types';
import { CreateProfesionalDto } from './create-profesional.dto';

export class UpdateProfesionalDto extends PartialType(CreateProfesionalDto) {}
