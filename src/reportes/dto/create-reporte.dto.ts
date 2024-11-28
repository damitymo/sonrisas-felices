import { ApiProperty } from '@nestjs/swagger';

export class CreateReporteDto {
  @ApiProperty({
    example: 'Tipo de reporte',
    description: 'El tipo de reporte',
  })
  tipo: string;

  @ApiProperty({
    example: '2023-01-01',
    description: 'La fecha del reporte',
  })
  fecha: Date;

  @ApiProperty({
    example: 'Datos analizados del reporte',
    description: 'Los datos analizados del reporte',
  })
  datosAnalizados: string;
}