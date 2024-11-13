import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboardventas',
  templateUrl: './dashboardventas.component.html',
  styleUrls: ['./dashboardventas.component.css']
})
export class DashboardventasComponent {
  single= [
    {
        name: 'Marzo',
        value: 530.0,
      },
      {
        name: 'Abril',
        value: 936.0,
      }     
      
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
  xAxisLabel = 'Mes';
  yAxisLabel = 'Monto';

  onSelect(event) {
    console.log(event);
  }

}
