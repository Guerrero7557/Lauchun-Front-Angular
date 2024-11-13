import { Component} from '@angular/core';
import { ProductoService} from '../Service/producto/producto.service';
import { Producto } from '../Models/Producto';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  
  productos:Producto[]=[]

  constructor(private productoService:ProductoService, private router:Router){

  }

  ngOnInit(){
    this.listarProductos()
  }

  listarProductos(){
    this.productoService.getProducto().subscribe(data=>{
      this.productos = data
    })
    
  }

  eliminarproducto(producto:Producto){
    this.productoService.eliminarProducto(producto)
    .subscribe(data=>{
      //this.productos = this.productos.filter(c=>c.idproducto!==producto.idproducto);
      this.productoService.getProducto().subscribe(data=>{
        this.productos = data
      })
      
    })
    Swal.fire("Informacion", "Se eliminó con éxito","success") 
  }

  Editar(producto:Producto):void{
    localStorage.setItem("idproducto",producto.idproducto.toString());
    this.router.navigate(["updateproductos"]);
  }
  
  updaterod():void{
    this.router.navigate(["addprod"]);
  }

  

  addprod():void{
    this.router.navigate(["addprod"]);
  }

  today = new Date();
  cValue = formatDate(this.today, 'yyyy-MM-dd', 'en-US');

  // Nombre del archivo Excel
  fileName = 'ReporteProductos-'+this.cValue+'.xlsx';
  

  // Método para exportar los datos a Excel
  exportToExcel(): void {
    // Obtener el elemento HTML de la tabla
    let element = document.getElementById('data-table');
    // Convertir la tabla en una hoja de Excel
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    // Crear un libro de Excel
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    // Añadir la hoja al libro
    XLSX.utils.book_append_sheet(book, worksheet, 'ReporteProductos-'+this.cValue);
    // Escribir el libro en un archivo
    XLSX.writeFile(book, this.fileName);
  }

}
