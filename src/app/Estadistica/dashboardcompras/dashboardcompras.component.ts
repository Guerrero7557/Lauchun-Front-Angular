import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { Compra } from 'src/app/Models/Compra';
import { CompraService } from 'src/app/Service/compra/compra.service';

//nada
@Component({
  selector: 'app-dashboardcompras',
  templateUrl: './dashboardcompras.component.html',
  styleUrls: ['./dashboardcompras.component.css']
})
export class DashboardcomprasComponent implements OnInit {

    compras:Compra[]=[]
    

    

  constructor(private compraService:CompraService, private router:Router){

    
  }
  ngOnInit(): void{
   /* this.compraService.getAll().subscribe(
      c=>{
        this.compras = c
        this.compras.forEach(element => {
           let arr:arreglost[]= new arreglost [element.idproveedor.nombre,element.montototalc]           
          this.single.push(arr[element.idproveedor.nombre,element.montototalc])
          console.log(arr)
        });
      }
    ) */
  }
  single= [
    {
        name: 'Artesco S.A',
        value: 66000.0,
      },
      {
        name: 'Dimer Sac',
        value: 44355.0,
      },
      {
        name: 'Faber Castell',
        value: 10355.00,
      },
  ];




      view: [number, number] = [700, 400];

  // Opcional: cambia los colores de las barras
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C'],
  };

  // Opcional: agrega un degradado a las barras
  gradient = false;

  // Opcional: muestra u oculta los ejes X e Y, la leyenda, y los rótulos de los ejes
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Proveedores';
  yAxisLabel = 'Monto';

  onSelect(event) {
    console.log(event);
  }


  

}

class arreglost{
    public name:string;
    public value:string;

}
