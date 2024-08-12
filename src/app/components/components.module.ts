import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { DonutComponent } from './donut/donut.component';
import { BaseChartDirective } from 'ng2-charts';



@NgModule({
  declarations: [
    IncrementadorComponent,
    DonutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BaseChartDirective,

  ],
  exports: [
    IncrementadorComponent,
    DonutComponent
  ]
})
export class ComponentsModule { }
