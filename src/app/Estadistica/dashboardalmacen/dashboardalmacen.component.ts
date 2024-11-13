import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboardalmacen',
  templateUrl: './dashboardalmacen.component.html',
  styleUrls: ['./dashboardalmacen.component.css']
})
export class DashboardalmacenComponent {

  single= [
    {
        name: 'Temperas de Colores',
        value: 43,
      },
      {
        name: 'Lapicer Gel Rojo',
        value: 93,
      },
      {
        name: 'Folder manila',
        value: 103,
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
