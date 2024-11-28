import { Paciente } from 'src/pacientes/entities/paciente.entity';
import { Turno } from 'src/turnos/entities/turno.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
  } from 'typeorm';
@Entity()
export class Profesional {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  especialidad: string;

  @Column()
  contacto: string;

  @OneToMany(() => Turno, turno => turno.profesional)
  turnos: Turno[];

  @OneToMany(() => Paciente, paciente => paciente.profesional)
  pacientes: Paciente[];
}