import { PartialType } from '@nestjs/mapped-types';
import { CreateEstudiosLaboratorioDto } from './create-estudios-laboratorio.dto';

export class UpdateEstudiosLaboratorioDto extends PartialType(CreateEstudiosLaboratorioDto) {}
