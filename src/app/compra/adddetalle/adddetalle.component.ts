import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compra } from 'src/app/Models/Compra';
import { DetalleCompra } from 'src/app/Models/DetalleCompra';
import { Producto } from 'src/app/Models/Producto';
import { CompraService } from 'src/app/Service/compra/compra.service';
import { DetallecompraService } from 'src/app/Service/detallecompra/detallecompra.service';
import { ProductoService } from 'src/app/Service/producto/producto.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-adddetalle',
  templateUrl: './adddetalle.component.html',
  styleUrls: ['./adddetalle.component.css']
})
export class AdddetalleComponent implements OnInit {
  productos:Producto[]=[]
  detalles:DetalleCompra[]=[]
  compras:Compra[]=[]

  detalleslocal:Array<DetalleCompra>=[]
  detallelocal:DetalleCompra = new DetalleCompra()


  cuerpocompra:Compra = new Compra()
   total:number= 0
   numerodet = 0

  today = new Date();
  cValue = formatDate(this.today, 'yyyy-MM-dd', 'en-US');

  public producto :Producto = new Producto();
  public compra:Compra = new Compra()
  public detalle :DetalleCompra = new DetalleCompra()

  constructor(private productoService:ProductoService, private router: Router, private compraService :CompraService, private detalleService:DetallecompraService){
    
  }

  ngOnInit():void{
    this.productoService.getProducto().subscribe(
      prod=>{
      this.productos=prod;
      }
    ); 

    this.compraService.getAll().subscribe(
      comp=>{
      this.compras=comp;
      }
    ); 

    

    this.compraService.getById(JSON.parse(localStorage.getItem("idcompra"))).subscribe(
      c=>{
        this.cuerpocompra=c
      }
    ) 

    this.detalles = JSON.parse(localStorage.getItem("detalles"))  
    
    console.log(this.cValue)
  }  

  Agregardetallelocal(det:DetalleCompra){     
      
   //let miArray =JSON.parse(localStorage.getItem("detalles"))
   this.detalleslocal = JSON.parse(localStorage.getItem("detalles"))
   //if (miArray == null) miArray = []
   if (this.detalleslocal == null) this.detalleslocal = []
   det.idcompra = this.cuerpocompra 
    
    this.detalleslocal.push(det);
    //miArray.push(det)
    this.numerodet = this.detalleslocal.length

    localStorage.setItem("detalles", JSON.stringify(this.detalleslocal));
    //localStorage.setItem("detalles", JSON.stringify(miArray));
    this.detalles = JSON.parse(localStorage.getItem("detalles"))  
    console.log(JSON.stringify(this.detalleslocal))
    this.total +=+det.costo * +det.cantidad    
    
  }


  eliminardetallelocal(indice:number, det:DetalleCompra){
    let miArray =JSON.parse(localStorage.getItem("detalles"))    
    
      miArray.splice(indice, 1); //eliminar el registro del arraylist
      console.log(indice)
      localStorage.setItem("detalles", JSON.stringify(miArray));  
      this.detalles = JSON.parse(localStorage.getItem("detalles"))
      this.total -=+det.costo * +det.cantidad 
      this.numerodet -= 1
      
  }



  


 
 



  
   
  
  Agregardetalle(){
    let miArray =JSON.parse(localStorage.getItem("detalles"))    
    miArray.forEach(element => {
      this.detalleService.create(element)
    .subscribe(data=>{      
           
    })
      localStorage.setItem("total", JSON.stringify(this.total));     
      this.router.navigate(["exportpdf"])
      console.log("Se registró con éxito"); 
      console.log(element)
      localStorage.removeItem("detalles")
    });
    
    
  }

  

  


  grabar_localstorage(){
    let nombre:string = "Harvey";

    let persona={
      nombre:"Lucas",
      apellido:"vazques",
      edad:19,
      coords:{
        lat:10,
        long:-10
      }
    }

    localStorage.setItem("nombre", nombre)
    localStorage.setItem("persona",JSON.stringify(persona))

  }

  obtener_localStorage(){
    let nombre = localStorage.getItem("nombre")
    let persona = JSON.parse(localStorage.getItem("persona"))

    console.log(nombre)
    console.log(persona)
  }

















}




