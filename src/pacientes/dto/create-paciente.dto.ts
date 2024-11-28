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