import { Component } from '@angular/core';
import{OnInit} from '@angular/core';
import { ProveedorService } from 'src/app/Service/proveedor/proveedor.service';
import { Proveedor } from '../../Models/Proveedor';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateproveedor',
  templateUrl: './updateproveedor.component.html',
  styleUrls: ['./updateproveedor.component.css']
})
export class UpdateproveedorComponent implements OnInit{
  public proveedor:Proveedor = new Proveedor()
  constructor(private router:Router, private proveedorService:ProveedorService) { }
  ngOnInit(): void {
    this.Editar();
  }
  
  Editar(){
    let idproveedor=localStorage.getItem("idproveedor"); 
    this.proveedorService.getProveedoresId(+idproveedor!)
    .subscribe(data=>{
      this.proveedor=data;
    })
  }
  ActualizarProveedor(proveedor:Proveedor){
    this.proveedorService.updateProveedores(proveedor)
    .subscribe(data=>{
      this.proveedor=data;
      Swal.fire("Informacion", "Se actualizó con éxito","success")      
      this.router.navigate(["proveedor"])
    })
  }

}
