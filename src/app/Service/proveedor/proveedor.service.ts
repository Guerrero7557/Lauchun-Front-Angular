import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from 'src/app/Models/Proveedor';


@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private urlEndPoint:string="http://localhost:8095/ApiLauchunMovil/";

  constructor(private http:HttpClient) { }

  getProveedores():Observable<Proveedor[]>{    
    return this.http.get<Proveedor[]>(this.urlEndPoint + "proveedor");
  }
  getProveedoresCustom():Observable<Proveedor[]>{    
    return this.http.get<Proveedor[]>(this.urlEndPoint + "proveedor/custom");
  }

  createProveedor(proveedor:Proveedor){
    return this.http.post<Proveedor>(this.urlEndPoint + "proveedor",proveedor)
  }

  getProveedoresId(idProveedor:number){
    return this.http.get<Proveedor>(this.urlEndPoint+"proveedor/"+idProveedor);
  }
  updateProveedores(proveedor:Proveedor){
    return this.http.put<Proveedor>(this.urlEndPoint+"proveedor/"+proveedor.idproveedor,proveedor);
  }

  deleteProveedor(proveedor:Proveedor):Observable<any>{
    return this.http.delete<Proveedor>(this.urlEndPoint+"proveedor/"+proveedor.idproveedor);
  }
}
