import { ApiProperty } from '@nestjs/swagger';

export class CreateProfesionalDto {
  @ApiProperty({
    example: 'Dr. Juan Perez',
    description: 'El nombre del profesional',
  })
  nombre: string;

  @ApiProperty({
    example: 'Cardiología',
    description: 'La especialidad del profesional',
  })
  especialidad: string;

  @ApiProperty({
    example: '123456789',
    description: 'El contacto del profesional',
  })
  contacto: string;
}