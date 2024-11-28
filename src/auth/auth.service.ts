import { BadRequestException, Injectable } from '@nestjs/common';
import { SignInAuthDto } from './dto/signIn.dto';
import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { sendWelcomeEmail } from 'src/config/nodeMailer';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(credential: SignInAuthDto) {
    const dbUser = await this.userService.findOneByEmail(credential.email);
    if (!dbUser) {
      throw new BadRequestException('Usuario no encontrado');
    }
   
    const isPasswordValid = await bcrypt.compare(
      credential.password,
      dbUser.password,
    );
    if (!isPasswordValid) {
      throw new BadRequestException('Contraseña invalida');
    }
    const payload = {
      username: dbUser.email,
      sub: dbUser.userId,
      role: dbUser.role,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signUp(user: CreateUserDto) {
    console.log(
      'Iniciando el proceso de registro para el usuario:',
      user.email,
    );

    // Revisamos que las contraseñas coincidan
    if (user.password !== user.confirmPassword) {
      throw new BadRequestException('Las contraseñas no coinciden');
    }

    // Revisamos si el email ya existe en la DB
    const dbUser = await this.userService.findOneByEmail(user.email);
    if (dbUser) {
      throw new BadRequestException('El email ya está registrado');
    }

    // Hasheamos la contraseña
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = {
      ...user,
      password: hashedPassword,
    };

    // Creamos el nuevo usuario en la base de datos
    const createdUser = await this.userService.createUser(newUser);
    console.log('Usuario creado exitosamente:', createdUser.email);

    // Enviar el correo de bienvenida al usuario después de la creación
    try {
      console.log('Intentando enviar el correo de bienvenida a:', user.email);
      await sendWelcomeEmail(user.email, user.name); // Enviar correo de registro
      console.log('Correo de bienvenida enviado correctamente a:', user.email);
    } catch (error) {
      console.error('Error al enviar el correo de bienvenida:', error);
      throw new BadRequestException(
        'Hubo un problema al enviar el correo de bienvenida',
      );
    }

    // Devolvemos el usuario creado (sin la contraseña)
    return { ...createdUser, password: undefined };
  }
}
