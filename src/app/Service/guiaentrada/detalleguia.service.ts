import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DetalleGuia } from '../../Models/DetalleGuia';

@Injectable({
  providedIn: 'root'
})
export class DetalleGuiaService {

  private urlEndPoint:string="http://localhost:8095/ApiLauchunMovil/";

  constructor(private http:HttpClient) { }

  getAll():Observable<DetalleGuia[]>{
    return this.http.get<DetalleGuia[]>(this.urlEndPoint +"detalleguia");
  }

  getxVenta(id:number):Observable<DetalleGuia[]>{
    return this.http.get<DetalleGuia[]>(this.urlEndPoint +"detalleguia/buscarporguiadeentrada/" + id);
  }

  getById(id:number):Observable<DetalleGuia>{
    return this.http.get<DetalleGuia>(this.urlEndPoint +"detalleguia/" + id);
  }

  create(detalleguia:DetalleGuia){
    return this.http.post<DetalleGuia>(this.urlEndPoint +"detalleguia", detalleguia);
  }

  update(detalleguia:DetalleGuia):Observable<DetalleGuia>{
    return this.http.put<DetalleGuia>(this.urlEndPoint +"detalleguia/" + detalleguia.iddetalleguia, detalleguia);
  }
}