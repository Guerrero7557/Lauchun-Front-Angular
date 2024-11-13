import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Compra } from 'src/app/Models/Compra';
import { DetalleCompra } from 'src/app/Models/DetalleCompra';
import { Producto } from 'src/app/Models/Producto';
import { Proveedor } from 'src/app/Models/Proveedor';
import { CompraService } from 'src/app/Service/compra/compra.service';
import { DetallecompraService } from 'src/app/Service/detallecompra/detallecompra.service';
import { ProductoService } from 'src/app/Service/producto/producto.service';
import { ProveedorService } from 'src/app/Service/proveedor/proveedor.service';

@Component({
  selector: 'app-updatecompra',
  templateUrl: './updatecompra.component.html',
  styleUrls: ['./updatecompra.component.css']
})
export class UpdatecompraComponent {

compras:Compra[]=[]
proveedores :Proveedor[]=[]
detalles :DetalleCompra[]=[]

public compra:Compra= new Compra()
public proveedor:Proveedor = new Proveedor()
public producto:Producto = new Producto()
public detalle:DetalleCompra = new DetalleCompra()

constructor(private compraService:CompraService, private router:Router, private proveedorService:ProveedorService, private productoservice:ProductoService, private detalleservice:DetallecompraService){

}

ngOnInit(){
  this.Editar()
  this.proveedorService.getProveedores().subscribe(
    p=>{
      this.proveedores=p
    }
  )
}


Editar(){
  let idcompra=localStorage.getItem("idcompra"); 
  this.compraService.getById(+idcompra!)
  .subscribe(data=>{
    this.compra=data;
  })
}

actualizaregistro(compra:Compra){
  this.compraService.update(compra).subscribe(()=>{
    console.log(compra)
  })
}

actualizarCompra(compra:Compra){
  this.compraService.update(compra)
  .subscribe(()=>{
       
  })  
  alert("Se Actualizó")
  this.router.navigate(["listcompra"])
}

// intento de actulizar stock 

actualizarStock(compra:Compra){
  this.detalleservice.getxVenta(compra.idcompra).subscribe(
    c=>{
      this.detalles=c
    }
  )
  if(this.detalles!=null){
    this.detalles.forEach(element => {
      let idprod =element.idproducto;
      let cantidad = element.cantidad;
      let producto:Producto
      this.productoservice.getProductoId(+idprod).subscribe(
        p=>{
          producto=p
        }
      )
      //let cantidadactual = producto.stock + cantidad
      
     producto.stock += cantidad
      this.productoservice.actualizarProducto(producto).subscribe(
        c=>{
          this.producto=c
        }
      )
      console.log("se actualizo el registro")
      
    });
  }
  console.log("se actualizo todo el stock!")
   
}
 
}
