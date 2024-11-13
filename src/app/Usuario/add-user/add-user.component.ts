import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rol } from 'src/app/Models/Rol';
import { Usuario } from 'src/app/Models/Usuario';
import { RolService } from 'src/app/Service/rol/rol.service';
import { UsuarioService } from 'src/app/Service/usuario/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent  implements OnInit{

  usuarios :Usuario[]=[]

  roles :Rol[]=[]


  public usuario:Usuario = new Usuario()

  constructor(private router:Router, private usuarioService:UsuarioService, private rolService:RolService){}

  ngOnInit(): void {
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

  GuardarProveedor(usuario:Usuario){
    this.usuarioService.createUsuario(usuario)
    .subscribe(data=>{
      Swal.fire("Informacion", "Se registró con éxito","success")
      this.router.navigate(["listuser"])
    })
  }


}
