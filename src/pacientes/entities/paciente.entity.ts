import { EstudioLaboratorio } from 'src/estudios-laboratorio/entities/estudios-laboratorio.entity';
import { ModuloAlimenticio } from 'src/modulos-alimentos/entities/modulos-alimento.entity';
import { Vacuna } from 'src/vacunas/entities/vacuna.entity';
import { Entity, PrimaryGeneratedColumn, Column,  OneToMany,  } from 'typeorm';

@Entity()
export class Paciente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  fechaNacimiento: Date;

  @Column('text')
  historialMedico: string;

  @Column()
  zonaResidencia: string;

  @OneToMany(() => EstudioLaboratorio, estudio => estudio.paciente)
  estudios: EstudioLaboratorio[];

  @OneToMany(() => Vacuna, vacuna => vacuna.paciente)
  vacunas: Vacuna[];

  @OneToMany(() => ModuloAlimenticio, modulo => modulo.paciente)
  modulos: ModuloAlimenticio[];
    profesional: any;
}