import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TipoPago } from 'src/app/Models/TipoPago';

@Injectable({
  providedIn: 'root'
})
export class TipopagoService {

  private urlEndPoint:string="http://localhost:8095/ApiLauchunMovil/";

  constructor(private http:HttpClient) { }

  getTipoPagos():Observable<TipoPago[]>{    
    return this.http.get<TipoPago[]>(this.urlEndPoint + "tipopago");
  }

  createTipoPago(tipopago:TipoPago){
    return this.http.post<TipoPago>(this.urlEndPoint + "tipopago",tipopago)
  }

  getTipoPagosId(idTipoPago:number){
    return this.http.get<TipoPago>(this.urlEndPoint+"tipopago/"+idTipoPago);
  }
  updateTipoPago(tipopago:TipoPago){
    return this.http.put<TipoPago>(this.urlEndPoint+"tipopago/"+tipopago.idtipopago,tipopago);
  }

  deleteTipoPago(tipopago:TipoPago):Observable<any>{
    return this.http.delete<TipoPago>(this.urlEndPoint+"tipopago/"+tipopago.idtipopago);
  }
}
