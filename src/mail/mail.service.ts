import { Injectable } from '@nestjs/common';
import { CreateMailDto } from './dto/create-mail.dto';
import { UpdateMailDto } from './dto/update-mail.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  create(createMailDto: CreateMailDto) {
    return 'This action adds a new mail';
  }

  findAll() {
    return `This action returns all mail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mail`;
  }

  update(id: number, updateMailDto: UpdateMailDto) {
    return `This action updates a #${id} mail`;
  }

  remove(id: number) {
    return `This action removes a #${id} mail`;
  }

  async sendWelcomeEmail(email: string, reason: string, permanent: boolean) {
    const subject = permanent ? 'Bienvenida' : 'Bienvenida';
    const text = `Este es un correo de bienvenida para ${email} `;

    await this.mailerService.sendMail({
      to: email,
      subject,
      text,
    });
  }
 
}

