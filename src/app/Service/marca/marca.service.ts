import { Injectable } from '@angular/core';

import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Marca } from 'src/app/Models/Marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  private urlEndPoint:string="http://localhost:8095/ApiLauchunMovil/";

  constructor(private http:HttpClient) { }
  
  getMarcas():Observable<Marca[]>{    
    return this.http.get<Marca[]>(this.urlEndPoint + "marca");
  }

  
  createMarca(marca:Marca){
    return this.http.post<Marca>(this.urlEndPoint + "marca",marca)
  }

  getMarcaId(idMarca:number){
    return this.http.get<Marca>(this.urlEndPoint+"marca/"+idMarca);
  }
  updateMarcas(marca:Marca){
    return this.http.put<Marca>(this.urlEndPoint+"marca/"+marca.idmarca,marca);
  }

  deleteMarca(marca:Marca):Observable<any>{
    return this.http.delete<Marca>(this.urlEndPoint+"marca/"+marca.idmarca);
  }

}
