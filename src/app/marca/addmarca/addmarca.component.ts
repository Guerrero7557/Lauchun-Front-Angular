import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marca } from 'src/app/Models/Marca';
import { MarcaService } from 'src/app/Service/marca/marca.service';
import { OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addmarca',
  templateUrl: './addmarca.component.html',
  styleUrls: ['./addmarca.component.css']
})
export class AddmarcaComponent implements OnInit {

  marcas:Marca[]=[]

  public marca:Marca = new Marca()

  constructor(private marcaService:MarcaService, private router:Router){
    
  }

  ngOnInit(): void {
    this.marcaService.getMarcas().subscribe(
      marcasMetodo=>{
      this.marcas=marcasMetodo;
      }
    ); 
  }

  
  
  GuardarMarca(marca:Marca){
    this.marcaService.createMarca(marca)
    .subscribe(data=>{
      Swal.fire("Informacion", "Se registró con éxito","success")
      this.router.navigate(["marca"])
    })
  }

  
}
