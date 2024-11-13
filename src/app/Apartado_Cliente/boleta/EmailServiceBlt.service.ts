/*

import { Injectable } from '@angular/core';

import nodemailer from 'nodemailer';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceBlt {
  private transporter: any;

  constructor() {
    // Configurar el transportador de correo electrónico
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'lauchun.sm@gmail.com',
        pass: 'iqxykgcdpwwqloaz'
      }
    });
  }

  enviarCorreoConAdjunto(destinatario: string, asunto: string, texto: string, archivoAdjunto: any) {
    const mailOptions = {
      from: 'lauchun.sm@gmail.com',
      to: destinatario,
      subject: asunto,
      text: texto,
      attachments: [
        {
          filename: 'boleta.pdf',
          content: archivoAdjunto
        }
      ]
    };

    // Enviar el correo electrónico
    this.transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Correo electrónico enviado: ' + info.response);
      }
    });
  }
}
*/
