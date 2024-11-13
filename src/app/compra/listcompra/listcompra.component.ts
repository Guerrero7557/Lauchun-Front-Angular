import { Component } from '@angular/core';
import { OnInit} from '@angular/core'
import { Router } from '@angular/router';
import { Compra } from 'src/app/Models/Compra';
import { CompraService } from 'src/app/Service/compra/compra.service';
import * as XLSX from 'xlsx';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-listcompra',
  templateUrl: './listcompra.component.html',
  styleUrls: ['./listcompra.component.css']
})
export class ListcompraComponent implements OnInit {

  compras:Compra[]=[]

  constructor(private compraService:CompraService, private router:Router){

    
  }
  ngOnInit(): void{
    this.compraService.getAll().subscribe(
      c=>{
        this.compras = c
      }
    )
  }

  eliminarCompra(compra:Compra){
    this.compraService.delete(compra.idcompra)
    .subscribe(data=>{
      this.compraService.getAll().subscribe(
        c=>{
        this.compras=c;
        }
      ); 
      alert("Compra Eliminada con Exito")
    })
  }

  EditarCompra(compra:Compra): void{
  localStorage.setItem("idcompra", compra.idcompra.toString());
    this.router.navigate(["editcompra"]);

  }

  add():void{
    this.router.navigate(["addcompra"]);
  }
  
  today = new Date();
  cValue = formatDate(this.today, 'yyyy-MM-dd', 'en-US');

  // Nombre del archivo Excel
  fileName = 'ReporteCompras-'+this.cValue+'.xlsx';
  

  // Método para exportar los datos a Excel
  exportToExcel(): void {
    // Obtener el elemento HTML de la tabla
    let element = document.getElementById('data-table');
    // Convertir la tabla en una hoja de Excel
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    // Crear un libro de Excel
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    // Añadir la hoja al libro
    XLSX.utils.book_append_sheet(book, worksheet, 'ReporteCompras-'+this.cValue);
    // Escribir el libro en un archivo
    XLSX.writeFile(book, this.fileName);
  }

  irdashboard(){
    this.router.navigate(["dashboardcompra"]);
  }

}