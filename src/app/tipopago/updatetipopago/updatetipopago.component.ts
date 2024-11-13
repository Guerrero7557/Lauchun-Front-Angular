import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoPago } from 'src/app/Models/TipoPago';
import { TipopagoService } from 'src/app/Service/tipopago/tipopago.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatetipopago',
  templateUrl: './updatetipopago.component.html',
  styleUrls: ['./updatetipopago.component.css']
})
export class UpdatetipopagoComponent implements OnInit{

  public tipopago:TipoPago = new TipoPago()
  constructor(private router:Router, private tipopagoService:TipopagoService) { }
  ngOnInit(): void {
    this.Editar();
  }
  
  Editar(){
    let idtipopago=localStorage.getItem("idtipopago"); 
    this.tipopagoService.getTipoPagosId(+idtipopago!)
    .subscribe(data=>{
      this.tipopago=data;
    })
  }
  ActualizarTipoPago(tipopago:TipoPago){
    this.tipopagoService.updateTipoPago(tipopago)
    .subscribe(data=>{
      this.tipopago=data;
      Swal.fire("Informacion", "Se actualizó con éxito","success") 
      this.router.navigate(["tipopago"])
    })
  }

}