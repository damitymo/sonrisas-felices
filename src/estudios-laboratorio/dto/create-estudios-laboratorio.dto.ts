import { ApiProperty } from '@nestjs/swagger';

export class CreateEstudiosLaboratorioDto {
  @ApiProperty({
    example: 'Análisis de sangre',
    description: 'El tipo de estudio de laboratorio',
  })
  tipo: string;

  @ApiProperty({
    example: 'Resultado del análisis de sangre',
    description: 'El resultado del estudio de laboratorio',
  })
  resultado: string;

  @ApiProperty({
    example: '2023-01-01',
    description: 'La fecha del estudio de laboratorio',
  })
  fecha: Date;

  @ApiProperty({
    example: 1,
    description: 'El ID del paciente asociado',
  })
  pacienteId: number;
}