import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Models/Usuario';
import { UsuarioService } from 'src/app/Service/usuario/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-u',
  templateUrl: './listar-u.component.html',
  styleUrls: ['./listar-u.component.css']
})
export class ListarUComponent {

  usuarios:Usuario[]=[]

  constructor(private usuarioService:UsuarioService, private router:Router){
    
    
  }

  ngOnInit(){   
    this.usuarioService.getUsuario().subscribe(
      u=>{
      this.usuarios=u;
      
      }
    ); 
  }

 
  

  eliminarUsuario(usuario:Usuario){
    this.usuarioService.eliminarUsuario(usuario.idusuario)
    .subscribe(data=>{
      this.usuarioService.getUsuario().subscribe(
        u=>{
        this.usuarios=u;
        }
      ); 
      Swal.fire("Informacion", "Se eliminó con éxito","success") 
    })
  }
  Editar(usuario:Usuario):void{
    localStorage.setItem("idusuario",usuario.idusuario.toString());
    this.router.navigate(["edituser"]);
  }

  add():void{
    this.router.navigate(["adduser"]);
  }







}
