import { Injectable } from '@angular/core';
import { map, Observable,of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Usuario } from '../Models/Usuario';
import { Credenciales } from '../Models/Credenciales';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlEndPoint:string="http://localhost:8095/ApiLauchunMovil/";
  
  public val:Boolean = false
  
  constructor(private http:HttpClient, private router:Router) { 
    
  }

  login(creed:Credenciales){
    return this.http.post(this.urlEndPoint + "login",creed,{
      observe:'response'
    }).pipe(map((response:HttpResponse<any>) =>{      
      var body = null
    if(response.headers.get('Authorization')!= null){
      body = response.body;
      const headers = response.headers;

      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('Bearer', '');
      
        localStorage.setItem('token', token);
      }
      
      return body
    }))    
  }

  getUsers():Observable<Usuario[]>{    
    return this.http.get<Usuario[]>(this.urlEndPoint + "usuario");
  }
  
  getUserId(idUser:number){    
    return this.http.get<Usuario>(this.urlEndPoint+"usuario/"+idUser);
  }

  getUserEmail(email:string){    
    return this.http.get<Usuario>(this.urlEndPoint+"usuario/xemail/"+email);
  }

  createUser(user:Usuario){
    return this.http.post<Usuario>(this.urlEndPoint + "/usuarionew",user)
  }

  updateUser(user:Usuario){
    return this.http.put<Usuario>(this.urlEndPoint+"/usuarioupdate/"+user.idusuario,user);
  }

  generaToken(user:String,passw:String){
    return this.http.get<number>(this.urlEndPoint+"/"+user+"/"+passw);
  }

  getUserbyUaser(username:String){
    return this.http.get<Usuario>(this.urlEndPoint+"/"+username);
  }

  loginUser(token: string){
    localStorage.setItem("token",token)
    return true;
  }

  isLoggedIn(){
    let token =localStorage.getItem("token");
    if (token==undefined || token=='' || token==null){
      return false;
    } else{
      return true;
    }
  }

  
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('usuario')    
    return true;    
  }

  getToken(){
    return localStorage.getItem("token");
  }

  validarrol(){
    var usuario:Usuario =JSON.parse(localStorage.getItem("usuario"))
    if(usuario.idrol.idrol ==1){
      return true
    }else{
      return false
    }    
  }

  validarrolec(){
    var usuario:Usuario =JSON.parse(localStorage.getItem("usuario"))
    if(usuario.idrol.idrol ==3){
      return true
    }else{
      return false
    }    
  }

  validarrolea(){
    var usuario:Usuario =JSON.parse(localStorage.getItem("usuario"))
    if(usuario.idrol.idrol ==2){
      return true
    }else{
      return false
    }    
  }
}
