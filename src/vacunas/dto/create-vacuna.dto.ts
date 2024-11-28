import { ApiProperty } from '@nestjs/swagger';

export class CreateVacunaDto {
  @ApiProperty({
    example: 'Vacuna contra la gripe',
    description: 'El nombre de la vacuna',
  })
  nombre: string;

  @ApiProperty({
    example: '2023-01-01',
    description: 'La fecha de aplicación de la vacuna',
  })
  fechaAplicacion: Date;

  @ApiProperty({
    example: '2023-06-01',
    description: 'La fecha de la próxima dosis de la vacuna',
  })
  proximaDosis: Date;

  @ApiProperty({
    example: 1,
    description: 'El ID del paciente asociado',
  })
  pacienteId: number;
}