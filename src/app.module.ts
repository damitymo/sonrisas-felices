import { Module } from '@nestjs/common';
import { PacientesModule } from './pacientes/pacientes.module';
import { VacunasModule } from './vacunas/vacunas.module';
import { TurnosModule } from './turnos/turnos.module';
import { ProfesionalModule } from './profesional/profesional.module';
import { ReportesModule } from './reportes/reportes.module';
import { ModulosAlimentosModule } from './modulos-alimentos/modulos-alimentos.module';
import { EstudiosLaboratorioModule } from './estudios-laboratorio/estudios-laboratorio.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import TypeOrmConfig from './config/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [TypeOrmConfig],
  }),
  TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory: (configService: ConfigService) =>
      configService.get('typeorm'),
  }),
  MailerModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: configService.get<string>('EMAIL_USER'),
          pass: configService.get<string>('EMAIL_PASS'),
        },
      },
      defaults: {
        from: `"No Reply" <${configService.get<string>('EMAIL_USER')}>`,
      },
    }),
  }),
  PacientesModule, 
  VacunasModule, 
  TurnosModule, 
  ProfesionalModule, 
  ReportesModule, 
  ModulosAlimentosModule, 
  EstudiosLaboratorioModule, 
  AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
