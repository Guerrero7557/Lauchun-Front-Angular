import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rol } from 'src/app/Models/Rol';
import { RolService } from 'src/app/Service/rol/rol.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-cat',
  templateUrl: './addrol.component.html',
  styleUrls: ['./addrol.component.css']
})
export class AddrolComponent implements OnInit {

  roles:Rol []=[]

  public rol:Rol = new Rol()

  constructor(private router:Router, private rolService:RolService) { }

  ngOnInit(): void {
    this.rolService.getRoles().subscribe(
      rolesMetodo=>{
      this.roles=rolesMetodo;
      }
    ); 
  }

  
  
  GuardarRol(rol:Rol){
    this.rolService.createRoles(rol)
    .subscribe(data=>{
      Swal.fire("Informacion", "Se registró con éxito","success")
      this.router.navigate(["rol"])
    })
  }

  

}
