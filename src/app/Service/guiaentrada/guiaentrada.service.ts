import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GuiaEntrada } from 'src/app/Models/GuiaEntrada';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GuiaEntradaService {

  private urlEndPoint:string="http://localhost:8095/ApiLauchunMovil/";

  constructor(private http:HttpClient) { }

  getAll():Observable<GuiaEntrada[]>{
    return this.http.get<GuiaEntrada[]>(this.urlEndPoint +"guiaentrada");
  }

  getById(id:number){
    return this.http.get<GuiaEntrada>(this.urlEndPoint +"guiaentrada/" + id);
  }

  create(guiaentrada:GuiaEntrada){
    return this.http.post<GuiaEntrada>(this.urlEndPoint +"guiaentrada", guiaentrada);
  }

  update(guiaentrada:GuiaEntrada):Observable<GuiaEntrada>{
    return this.http.put<GuiaEntrada>(this.urlEndPoint +"guiaentrada/" + guiaentrada.idguia , guiaentrada);
  }

  delete(id:number):Observable<GuiaEntrada>{
    return this.http.delete<GuiaEntrada>(this.urlEndPoint +"guiaentrada/" + id);
  }

}

