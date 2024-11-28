import { PartialType } from '@nestjs/mapped-types';
import { CreateModulosAlimentoDto } from './create-modulos-alimento.dto';

export class UpdateModulosAlimentoDto extends PartialType(CreateModulosAlimentoDto) {}
