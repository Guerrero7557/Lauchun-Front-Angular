import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Email } from 'src/app/Models/Email';
import { DetalleventaService } from '../detalleventa/detalleventa.service';
import { Boleta } from 'src/app/Models/Boleta';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private urlEndPoint:string="http://localhost:8095/ApiLauchunMovil/";

  constructor(private http:HttpClient, private detalleventaservice:DetalleventaService) { }

  enviaremail(email:Email){
    return this.http.post<Email>(this.urlEndPoint + "send",email)
  }
  enviaremail2(email:Email){
    return this.http.post<Email>(this.urlEndPoint + "email/send",email)
  }

  enviaremail3(email:Email){
    return this.http.post<Email>(this.urlEndPoint + "send/email",email)
  }

  enviarboleta(boleta:Boleta){
    return this.http.post<Email>(this.urlEndPoint + "envioboleta",boleta)
  }

  




  cuerpocorreo(){

  }





}
