import { Component } from '@angular/core';
import { VentaService } from 'src/app/Service/venta/venta.service';
import { Venta } from 'src/app/Models/Venta';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {

  ventas:Venta[]=[]

  constructor(private ventaService:VentaService, private router:Router){ }

  ngOnInit(){
    this.listarVentas()
  }

  listarVentas(){
    this.ventaService.getVenta().subscribe(
      ventasMetodo =>{
        this.ventas= ventasMetodo
      }
    )
  }

  eliminarventa(venta:Venta){
    this.ventaService.eliminarVenta(venta)
    .subscribe(data=>{
      this.ventas = this.ventas.filter(v=>v.idventa!==venta.idventa);
      this.ventaService.getVenta().subscribe(
        ventasMetodo =>{
          this.ventas= ventasMetodo
        }
      )
    })
    Swal.fire("Informacion", "Se eliminó con éxito","success") 
  }

  Editar(venta:Venta):void{
    localStorage.setItem("idventa",venta.idventa.toString());
    this.router.navigate(["updateventas"]);
  }
  
  
  addventa():void{
    this.router.navigate(["addventa"]);
  }

  today = new Date();
  cValue = formatDate(this.today, 'yyyy-MM-dd', 'en-US');

  // Nombre del archivo Excel
  fileName = 'ReporteVentas-'+this.cValue+'.xlsx';
  

  // Método para exportar los datos a Excel
  exportToExcel(): void {
    // Obtener el elemento HTML de la tabla
    let element = document.getElementById('data-table');
    // Convertir la tabla en una hoja de Excel
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    // Crear un libro de Excel
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    // Añadir la hoja al libro
    XLSX.utils.book_append_sheet(book, worksheet, 'ReporteVentas-'+this.cValue);
    // Escribir el libro en un archivo
    XLSX.writeFile(book, this.fileName);
  }

}


