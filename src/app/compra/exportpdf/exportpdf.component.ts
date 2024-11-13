import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compra } from 'src/app/Models/Compra';
import { DetalleCompra } from 'src/app/Models/DetalleCompra';
import { CompraService } from 'src/app/Service/compra/compra.service';
import { DetallecompraService } from 'src/app/Service/detallecompra/detallecompra.service';
import { ProveedorService } from 'src/app/Service/proveedor/proveedor.service';

@Component({
  selector: 'app-exportpdf',
  templateUrl: './exportpdf.component.html',
  styleUrls: ['./exportpdf.component.css']
})
export class ExportpdfComponent implements OnInit{

  detalles:DetalleCompra[]=[]

  public compra:Compra = new Compra()
  total:number
  fecha:string

  constructor(private compraService:CompraService, private router: Router,private proveedorService:ProveedorService, private detalleservice:DetallecompraService){

  }

  ngOnInit(): void {
    this.compraService.getById(JSON.parse(localStorage.getItem("idcompra")))
    .subscribe(data=>{
      this.compra = data
    })
    
    this.detalleservice.getxVenta(JSON.parse(localStorage.getItem("idcompra"))).subscribe(
      c=>{
        this.detalles=c
      }
    ) 

    this.total = JSON.parse(localStorage.getItem("total"))
    this.fecha = JSON.parse(localStorage.getItem("fechacompra"))
  }

  Editar(){
    let idcompra=localStorage.getItem("idcompra"); 
    this.detalleservice.getxVenta(+idcompra!)
    .subscribe(data=>{
      this.detalles=data;
    })
  }

  proveedor(){
    let idcompra=localStorage.getItem("idcompra"); 
    this.compraService.getById(+idcompra!)
    .subscribe(data=>{
      this.compra = data
    })

  }



}
