import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Models/Producto';
import { Usuario } from 'src/app/Models/Usuario';
import { LoginService } from 'src/app/Service/login.service';
import { ProductoService } from 'src/app/Service/producto/producto.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {

  productos:Producto[]=[]
  usuario:Usuario


  public condicion :Boolean = false

  constructor(private productoService:ProductoService, private loginservice:LoginService, private router:Router){
    setTimeout(()=>{
      if(!this.loginservice.val){
        this.loginservice.val = true
        //window.location.reload()
      }
    },5)
  }

  ngOnInit(){
    this.listarProductos()

    /*
    this.loginservice.getUserEmail(localStorage.getItem('email')).subscribe(u=>{
      //localStorage.setItem('usuario', u);
      console.log(u)
    })
    */

    this.usuario =JSON.parse(localStorage.getItem("usuario"))

  }

  listarProductos(){
    this.productoService.getProductoCustom().subscribe(
      productosMetodo =>{
        this.productos= productosMetodo
      }
    )
  }

  listarProductosxcat(id:number){
    this.productoService.getProductoxCat(id).subscribe(
      productosMetodo =>{
        this.productos= productosMetodo
      }
    )
  }

  guardaridprod(id:number){
    localStorage.setItem("idproducto", JSON.stringify(id));
    this.router.navigate(["detprod"]);
  }

}
