import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Rol } from 'src/app/Models/Rol';
import { Usuario } from 'src/app/Models/Usuario';
import { RolService } from 'src/app/Service/rol/rol.service';
import { UsuarioService } from 'src/app/Service/usuario/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {

  usuarios :Usuario[]=[]
  roles :Rol[]=[]

  public usuario:Usuario = new Usuario()

  constructor(private router:Router, private usuarioService:UsuarioService, private rolService:RolService){}

  ngOnInit(): void {
    this.Editar()

    this.usuarioService.getUsuario().subscribe(
      u=>{
      this.usuarios=u;
      }
    ); 

    this.rolService.getRoles().subscribe(
      r=>{
      this.roles=r;
      }
    ); 
  }

  Editar(){
    let idusuario=localStorage.getItem("idusuario"); 
    this.usuarioService.getUsuarioId(+idusuario!)
    .subscribe(data=>{
      this.usuario=data;
    })
  }



  actualizarUsuario(usuario:Usuario){
    this.usuarioService.actualizarUsuario(usuario)
    .subscribe(data=>{
      this.usuario = data    
    })
    Swal.fire("Informacion", "Se actualizó con éxito","success") 
    this.router.navigate(["listuser"])
  }

}
