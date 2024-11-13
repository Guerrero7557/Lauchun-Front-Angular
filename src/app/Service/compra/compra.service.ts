import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compra } from 'src/app/Models/Compra';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private urlEndPoint:string="http://localhost:8095/ApiLauchunMovil/";

  constructor(private http:HttpClient) { }

  // Obtener compras
  getAll():Observable<Compra[]>{
    return this.http.get<Compra[]>(this.urlEndPoint +"compra");
  }

  getById(id:number){
    return this.http.get<Compra>(this.urlEndPoint +"compra/" + id);
  }

  create(compra:Compra){
    return this.http.post<Compra>(this.urlEndPoint +"compra", compra);
  }

  update(compra:Compra):Observable<Compra>{
    return this.http.put<Compra>(this.urlEndPoint +"compra/" + compra.idcompra, compra);
  }

  delete(id:number):Observable<Compra>{
    return this.http.delete<Compra>(this.urlEndPoint +"compra/" + id);
  }

}

