import { Component } from '@angular/core';
import { OnInit} from '@angular/core';
import{Marca}from '../../Models/Marca';
import{MarcaService} from 'src/app/Service/marca/marca.service';
import{Router} from '@angular/router'
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit{

  marcas:Marca[]=[]

  constructor(private marcaService:MarcaService, private router:Router){
    
  }

  ngOnInit(){
    this.marcaService.getMarcas().subscribe(
      marcasMetodo=>{
      this.marcas=marcasMetodo;
      }
    ); 
  }

  eliminarMarca(marca:Marca){
    this.marcaService.deleteMarca(marca)
    .subscribe(data=>{
      this.marcaService.getMarcas().subscribe(
        categoriasMetodo=>{
        this.marcas=categoriasMetodo;
        }
      ); 
      Swal.fire("Informacion", "Se eliminó con éxito","success") 
    })
  }
  Editar(marca:Marca):void{
    localStorage.setItem("idmarca",marca.idmarca.toString());
    this.router.navigate(["updatemarca"]);
  }

  add():void{
    this.router.navigate(["addmarca"]);
  }

  
  today = new Date();
  cValue = formatDate(this.today, 'yyyy-MM-dd', 'en-US');

  // Nombre del archivo Excel
  fileName = 'ReporteMarcas-'+this.cValue+'.xlsx';
  

  // Método para exportar los datos a Excel
  exportToExcel(): void {
    // Obtener el elemento HTML de la tabla
    let element = document.getElementById('data-table');
    // Convertir la tabla en una hoja de Excel
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    // Crear un libro de Excel
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    // Añadir la hoja al libro
    XLSX.utils.book_append_sheet(book, worksheet, 'ReporteMarcas-'+this.cValue);
    // Escribir el libro en un archivo
    XLSX.writeFile(book, this.fileName);
  }


}