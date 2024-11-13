import { Component } from '@angular/core';
import{OnInit} from '@angular/core';
import { RolService } from 'src/app/Service/rol/rol.service';
import { Rol } from '../../Models/Rol';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updaterol',
  templateUrl: './updaterol.component.html',
  styleUrls: ['./updaterol.component.css']
})
export class UpdaterolComponent implements OnInit{
  public rol:Rol = new Rol()
  constructor(private router:Router, private rolService:RolService) { }
  ngOnInit(): void {
    this.Editar();
  }
  
  Editar(){
    let idrol=localStorage.getItem("idrol"); 
    this.rolService.getRolesId(+idrol!)
    .subscribe(data=>{
      this.rol=data;
    })
  }
  ActualizarRol(rol:Rol){
    this.rolService.updateRoles(rol)
    .subscribe(data=>{
      this.rol=data;
      Swal.fire("Informacion", "Se actualizó con éxito","success")  
      this.router.navigate(["rol"])
    })
  }

}