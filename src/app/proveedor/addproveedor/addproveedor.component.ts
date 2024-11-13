import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/Models/Proveedor';
import { ProveedorService } from 'src/app/Service/proveedor/proveedor.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-addproveedor',
  templateUrl: './addproveedor.component.html',
  styleUrls: ['./addproveedor.component.css']
})
export class AddproveedorComponent implements OnInit {

  proveedores:Proveedor []=[]

  public proveedor:Proveedor = new Proveedor()

  constructor(private router:Router, private proveedorService:ProveedorService) { }

  ngOnInit(): void {
    this.proveedorService.getProveedores().subscribe(
      proveedoresMetodo=>{
      this.proveedores=proveedoresMetodo;
      }
    ); 
  }

  
  
  GuardarProveedor(proveedor:Proveedor){
    this.proveedorService.createProveedor(proveedor)
    .subscribe(data=>{      
      Swal.fire("Informacion", "Se registró con éxito","success")
      this.router.navigate(["proveedor"])
    })
  }

  

}
