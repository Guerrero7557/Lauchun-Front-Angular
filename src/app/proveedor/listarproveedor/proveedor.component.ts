import { Component } from '@angular/core';
import { ProveedorService } from 'src/app/Service/proveedor/proveedor.service';
import { OnInit} from '@angular/core'
import { Proveedor } from '../../Models/Proveedor';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit{

  

  proveedores:Proveedor[]=[]

  constructor(private proveedorService:ProveedorService, private router:Router){
    
  }

  ngOnInit(){
    this.proveedorService.getProveedores().subscribe(
      proveedoresMetodo=>{
      this.proveedores=proveedoresMetodo;
      }
    ); 
  }

 
  

  eliminarProveedor(proveedor:Proveedor){
    this.proveedorService.deleteProveedor(proveedor)
    .subscribe(data=>{
      this.proveedorService.getProveedores().subscribe(
        proveedoresMetodo=>{
        this.proveedores=proveedoresMetodo;
        }
      ); 
      Swal.fire("Informacion", "Se eliminó con éxito","success")    
    })
  }
  Editar(proveedor:Proveedor):void{
    localStorage.setItem("idproveedor",proveedor.idproveedor.toString());
    this.router.navigate(["editproveedor"]);
  }

  add():void{
    this.router.navigate(["addproveedor"]);
  }

  today = new Date();
  cValue = formatDate(this.today, 'yyyy-MM-dd', 'en-US');

  // Nombre del archivo Excel
  fileName = 'ReporteProveedores-'+this.cValue+'.xlsx';
  

  // Método para exportar los datos a Excel
  exportToExcel(): void {
    // Obtener el elemento HTML de la tabla
    let element = document.getElementById('data-table');
    // Convertir la tabla en una hoja de Excel
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    // Crear un libro de Excel
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    // Añadir la hoja al libro
    XLSX.utils.book_append_sheet(book, worksheet, 'ReporteProveedores-'+this.cValue);
    // Escribir el libro en un archivo
    XLSX.writeFile(book, this.fileName);
  }




}