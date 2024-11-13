import { Component, OnInit } from '@angular/core';
import { CompraService } from 'src/app/Service/compra/compra.service';
import { ProveedorService } from 'src/app/Service/proveedor/proveedor.service';
import { Compra } from 'src/app/Models/Compra';
import { Proveedor } from 'src/app/Models/Proveedor';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
//import { DatePipe } from '@angular/common';




@Component({
  selector: 'app-addcompra',
  templateUrl: './addcompra.component.html',
  styleUrls: ['./addcompra.component.css']
})

export class AddcompraComponent implements OnInit {  
  
  compras:Compra[]=[]
  proveedores:Proveedor[]=[]

  public compra:Compra= new Compra();
  public proveedor:Proveedor= new Proveedor()

  

  today = new Date();
  cValue = formatDate(this.today, 'yyyy-MM-dd', 'en-US');

  constructor(private compraService:CompraService, private router: Router,private proveedorService:ProveedorService){
    //this.fechaActual = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  ngOnInit(){
    this.compraService.getAll().subscribe(
      comprasMetodo=>{
      this.compras=comprasMetodo;
      }
    );  

    this.proveedorService.getProveedoresCustom().subscribe(
      ProveedorMetodo=>{
      this.proveedores=ProveedorMetodo;
      }
    );  
  }
  
  GuardarIdCompra(id:number): void{ 
  localStorage.setItem("idcompra", JSON.stringify(id));  

  }

  AgregarCompra(compra:Compra){  
   //establecer un valor directamente 
  this.compraService.create(compra).subscribe(data=>{
    alert("Se agrego con éxito");
    //this.GuardarIdCompra(compra.idcompra)
    let num:number     
    num = this.compras.length + 1
    localStorage.setItem("idcompra", JSON.stringify(num)); 
    let fechacompra = compra.fechacompra  
    localStorage.setItem("fechacompra", JSON.stringify(fechacompra));
    this.router.navigate(["adddetallecompra"])
  })  
  
}




}
