import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Venta } from '../../Models/Venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private urlEndPoint:string="http://localhost:8095/ApiLauchunMovil/";

  constructor(private http:HttpClient) { }

  getVenta():Observable<Venta[]>{    
    return this.http.get<Venta[]>(this.urlEndPoint + "venta");
  }

  getVentaId(id:number){    
    return this.http.get<Venta>(this.urlEndPoint + "venta/"+ id);
  }

  createVenta(venta:Venta){
    return this.http.post<Venta>(this.urlEndPoint + "venta",venta)
  }

  actualizarVenta(venta:Venta){
    return this.http.put<Venta>(this.urlEndPoint + "venta/" + venta.idventa, venta)
  }

  eliminarVenta(venta:Venta):Observable<any>{
    return this.http.delete<Venta>(this.urlEndPoint+"venta/"+venta.idventa);
  }

}
