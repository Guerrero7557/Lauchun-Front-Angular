import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/Models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndPoint:string="http://localhost:8095/ApiLauchunMovil/";

  constructor(private http:HttpClient) { }

  getUsuario():Observable<Usuario[]>{    
    return this.http.get<Usuario[]>(this.urlEndPoint + "usuario");
  }

  getUsuarioId(id:number){    
    return this.http.get<Usuario>(this.urlEndPoint + "usuario/"+ id);
  }
  

  createUsuario(usuario:Usuario){
    return this.http.post<Usuario>(this.urlEndPoint + "usuario", usuario)
  }

  actualizarUsuario(usuario:Usuario){
    return this.http.put<Usuario>(this.urlEndPoint + "usuario/" + usuario.idusuario, usuario)
  }

  eliminarUsuario(id:number):Observable<any>{
    return this.http.delete<Usuario>(this.urlEndPoint+"usuario/"+id);
  }
}
