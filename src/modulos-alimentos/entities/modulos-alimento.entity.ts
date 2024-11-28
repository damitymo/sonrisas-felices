import { Paciente } from 'src/pacientes/entities/paciente.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
@Entity()
export class ModuloAlimenticio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @Column()
  fechaEntrega: Date;

  @Column()
  cantidad: number;

  @ManyToOne(() => Paciente, paciente => paciente.modulos)
  @JoinColumn({ name: 'pacienteId' })
  paciente: Paciente;
}