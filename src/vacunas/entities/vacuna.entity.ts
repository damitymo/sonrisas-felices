import { Paciente } from 'src/pacientes/entities/paciente.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
@Entity()
export class Vacuna {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  fechaAplicacion: Date;

  @Column()
  proximaDosis: Date;

  @ManyToOne(() => Paciente, paciente => paciente.vacunas)
  @JoinColumn({ name: 'pacienteId' })
  paciente: Paciente;
}