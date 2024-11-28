import { ApiProperty } from '@nestjs/swagger';

export class CreateModulosAlimentoDto {
  @ApiProperty({
    example: 'Descripción del módulo alimenticio',
    description: 'La descripción del módulo alimenticio',
  })
  descripcion: string;

  @ApiProperty({
    example: '2023-01-01',
    description: 'La fecha de entrega del módulo alimenticio',
  })
  fechaEntrega: Date;

  @ApiProperty({
    example: 10,
    description: 'La cantidad de módulos alimenticios',
  })
  cantidad: number;

  @ApiProperty({
    example: 1,
    description: 'El ID del paciente asociado',
  })
  pacienteId: number;
}