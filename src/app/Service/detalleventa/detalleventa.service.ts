import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DetalleVenta } from '../../Models/DetalleVenta';

@Injectable({
  providedIn: 'root'
})
export class DetalleventaService {

  private urlEndPoint:string="http://localhost:8095/ApiLauchunMovil/";

  constructor(private http:HttpClient) { }

  getDetalleVenta():Observable<DetalleVenta[]>{    
    return this.http.get<DetalleVenta[]>(this.urlEndPoint + "detalleventa");
  }

  getDetalleVentaId(id:number){    
    return this.http.get<DetalleVenta>(this.urlEndPoint + "detalleventa/"+ id);
  }

  getDetallexIdVenta(id:number):Observable<DetalleVenta[]>{    
    return this.http.get<DetalleVenta[]>(this.urlEndPoint + "detalleventa/buscarporventa/"+ id);
  }

  createDetalleVenta(detalleventa:DetalleVenta){
    return this.http.post<DetalleVenta>(this.urlEndPoint + "detalleventa",detalleventa)
  }

  actualizarDetalleVenta(detalleventa:DetalleVenta){
    return this.http.put<DetalleVenta>(this.urlEndPoint + "detalleventa/" + detalleventa.iddetalle, detalleventa)
  }

  eliminarDetalleVenta(detalleventa:DetalleVenta):Observable<any>{
    return this.http.delete<DetalleVenta>(this.urlEndPoint+"detalleventa/"+detalleventa.iddetalle);
  }
}
