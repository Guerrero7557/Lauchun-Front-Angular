import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Rol } from 'src/app/Models/Rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private urlEndPoint:string="http://localhost:8095/ApiLauchunMovil/";

  constructor(private http:HttpClient) { }

  getRoles():Observable<Rol[]>{    
    return this.http.get<Rol[]>(this.urlEndPoint + "rol");
  }

  createRoles(rol:Rol){
    return this.http.post<Rol>(this.urlEndPoint + "rol",rol)
  }

  getRolesId(idrol:number){
    return this.http.get<Rol>(this.urlEndPoint+"rol/"+idrol);
  }
  updateRoles(rol:Rol){
    return this.http.put<Rol>(this.urlEndPoint+"rol/"+rol.idrol,rol);
  }

  deleteRoles(rol:Rol):Observable<any>{
    return this.http.delete<Rol>(this.urlEndPoint+"rol/"+rol.idrol);
  }
}
