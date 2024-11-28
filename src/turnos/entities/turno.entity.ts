import { Paciente } from 'src/pacientes/entities/paciente.entity';
import { Profesional } from 'src/profesional/entities/profesional.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
@Entity()
export class Turno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: Date;

  @Column()
  hora: string;

  @ManyToOne(() => Paciente)
  @JoinColumn({ name: 'pacienteId' })
  paciente: Paciente;

  @ManyToOne(() => Profesional)
  @JoinColumn({ name: 'profesionalId' })
  profesional: Profesional;
}