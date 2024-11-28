import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { EstudioLaboratorio } from 'src/estudios-laboratorio/entities/estudios-laboratorio.entity';
import { Vacuna } from 'src/vacunas/entities/vacuna.entity';
import { ModuloAlimenticio } from 'src/modulos-alimentos/entities/modulos-alimento.entity';

export class CreatePacienteDto {
  @ApiProperty({
    example: 'Juan Perez',
    description: 'El nombre del paciente',
  })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({
    example: '1990-01-01',
    description: 'La fecha de nacimiento del paciente',
  })
  @IsDate()
  fechaNacimiento: Date;

  @ApiProperty({
    example: 'Historial médico del paciente',
    description: 'El historial médico del paciente',
  })
  @IsString()
  historialMedico: string;

  @ApiProperty({
    example: 'Zona 1',
    description: 'La zona de residencia del paciente',
  })
  @IsString()
  zonaResidencia: string;

  estudios: EstudioLaboratorio[];
  vacunas: Vacuna[];
  modulos: ModuloAlimenticio[];
}