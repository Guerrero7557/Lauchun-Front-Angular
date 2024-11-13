import { Component } from '@angular/core';
import { TipopagoService } from 'src/app/Service/tipopago/tipopago.service';
import { OnInit} from '@angular/core'
import { TipoPago } from '../../Models/TipoPago';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listartipopago',
  templateUrl: './listartipopago.component.html',
  styleUrls: ['./listartipopago.component.css']
})
export class ListartipopagoComponent implements OnInit{

  tipopagos:TipoPago[]=[]

  constructor(private tipopagoService:TipopagoService, private router:Router){
    
  }

  ngOnInit(){
    this.tipopagoService.getTipoPagos().subscribe(
      tipopagoMetodo=>{
      this.tipopagos=tipopagoMetodo;
      }
    ); 
  }

 
  eliminarTipoPago(tipopago:TipoPago){
    this.tipopagoService.deleteTipoPago(tipopago)
    .subscribe(data=>{
      this.tipopagoService.getTipoPagos().subscribe(
        tipopagoMetodo=>{
        this.tipopagos=tipopagoMetodo;
        }
      ); 
      Swal.fire("Informacion", "Se eliminó con éxito","success")    
    })
  }
  
  Editar(tipopago:TipoPago):void{
    localStorage.setItem("idtipopago",tipopago.idtipopago.toString());
    this.router.navigate(["edittipopago"]);
  }

  add():void{
    this.router.navigate(["addtipopago"]);
  }

}