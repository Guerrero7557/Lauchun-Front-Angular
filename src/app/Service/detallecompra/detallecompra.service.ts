import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetalleCompra } from 'src/app/Models/DetalleCompra';

@Injectable({
  providedIn: 'root'
})
export class DetallecompraService {

  private urlEndPoint:string="http://localhost:8095/ApiLauchunMovil/";

  constructor(private http:HttpClient) { }

  // Obtener compras
  getAll():Observable<DetalleCompra[]>{
    return this.http.get<DetalleCompra[]>(this.urlEndPoint +"detallecompra");
  }

  getxVenta(id:number):Observable<DetalleCompra[]>{
    return this.http.get<DetalleCompra[]>(this.urlEndPoint +"detallecompra/buscarporcompra/" + id);
  }

  getById(id:number):Observable<DetalleCompra>{
    return this.http.get<DetalleCompra>(this.urlEndPoint +"detallecompra/" + id);
  }

  create(compra:DetalleCompra){
    return this.http.post<DetalleCompra>(this.urlEndPoint +"detallecompra", compra);
  }

  update(compra:DetalleCompra):Observable<DetalleCompra>{
    return this.http.put<DetalleCompra>(this.urlEndPoint +"detallecompra/" + compra.idcompra, compra);
  }

  
}
