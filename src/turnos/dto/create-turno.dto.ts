import { ApiProperty } from '@nestjs/swagger';

export class CreateTurnoDto {
  @ApiProperty({
    example: '2023-01-01',
    description: 'La fecha del turno',
  })
  fecha: Date;

  @ApiProperty({
    example: '10:00',
    description: 'La hora del turno',
  })
  hora: string;

  @ApiProperty({
    example: 1,
    description: 'El ID del paciente asociado',
  })
  pacienteId: number;

  @ApiProperty({
    example: 1,
    description: 'El ID del profesional asociado',
  })
  profesionalId: number;
}