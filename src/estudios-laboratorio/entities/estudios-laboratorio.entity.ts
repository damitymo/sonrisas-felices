import { Paciente } from 'src/pacientes/entities/paciente.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';

@Entity()
export class EstudioLaboratorio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo: string;

  @Column('text')
  resultado: string;

  @Column()
  fecha: Date;

  @ManyToOne(() => Paciente, paciente => paciente.estudios)
  @JoinColumn({ name: 'pacienteId' })
  paciente: Paciente;
}