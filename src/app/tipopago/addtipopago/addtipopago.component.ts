import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoPago } from 'src/app/Models/TipoPago';
import { TipopagoService } from 'src/app/Service/tipopago/tipopago.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addtipopago',
  templateUrl: './addtipopago.component.html',
  styleUrls: ['./addtipopago.component.css']
})

export class AddtipopagoComponent implements OnInit {

  tipopagos:TipoPago []=[]

  public tipopago:TipoPago = new TipoPago()

  constructor(private router:Router, private tipopagoService:TipopagoService) { }

  ngOnInit(): void {
    this.tipopagoService.getTipoPagos().subscribe(
      tipopagosMetodo=>{
      this.tipopagos=tipopagosMetodo;
      }
    ); 
  }

  
  GuardarTipoPago(tipopago:TipoPago){
    this.tipopagoService.createTipoPago(tipopago)
    .subscribe(data=>{
      Swal.fire("Informacion", "Se registró con éxito","success")
      this.router.navigate(["tipopago"])
    })
  }

}