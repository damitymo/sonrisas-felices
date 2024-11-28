import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from 'typeorm';

@Entity()
export class Reporte {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo: string;

  @Column()
  fecha: Date;

  @Column('text')
  datosAnalizados: string;
}