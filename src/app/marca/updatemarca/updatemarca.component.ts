import { Component } from '@angular/core';
import { OnInit} from '@angular/core';
import{Marca}from '../../Models/Marca';
import{MarcaService} from 'src/app/Service/marca/marca.service';
import{Router} from '@angular/router'
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatemarca',
  templateUrl: './updatemarca.component.html',
  styleUrls: ['./updatemarca.component.css']
})
export class UpdatemarcaComponent {
  public marca:Marca = new Marca()
  constructor(private router:Router, private marcaService:MarcaService) { }
  ngOnInit(): void {
    this.Editar();
  }
  
  Editar(){
    let idmarca=localStorage.getItem("idmarca"); 
    this.marcaService.getMarcaId(+idmarca!)
    .subscribe(data=>{
      this.marca=data;
    })
  }
  ActualizarMarca(marca:Marca){
    this.marcaService.updateMarcas(marca)
    .subscribe(data=>{
      this.marca=data;
      Swal.fire("Informacion", "Se actualizó con éxito","success") 
      this.router.navigate(["marca"])
    })
  }

  

}

