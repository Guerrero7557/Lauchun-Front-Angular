import { Component } from '@angular/core';
import { RolService } from 'src/app/Service/rol/rol.service';
import { OnInit} from '@angular/core'
import { Rol } from 'src/app/Models/Rol';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit{

  

  roles:Rol[]=[]

  constructor(private rolService:RolService, private router:Router){
    
  }

  ngOnInit(){
    this.rolService.getRoles().subscribe(
      rolesMetodo=>{
      this.roles=rolesMetodo;
      }
    ); 
  }

 
  

  eliminarRol(rol:Rol){
    this.rolService.deleteRoles(rol)
    .subscribe(data=>{
      this.rolService.getRoles().subscribe(
        rolesMetodo=>{
        this.roles=rolesMetodo;
        }
      ); 
      Swal.fire("Informacion", "Se eliminó con éxito","success")      
    })
  }

  Editar(rol:Rol):void{
    localStorage.setItem("idrol",rol.idrol.toString());
    this.router.navigate(["updaterol"]);
  }

  add():void{
    this.router.navigate(["addrol"]);
  }




}
