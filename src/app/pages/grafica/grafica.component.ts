import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: ``
})
export class GraficaComponent {

  labels1: string[] = [ 'Pan','Soda','Tacos' ];


  public data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: [200, 400 ,100] },
    ],
  };

}
