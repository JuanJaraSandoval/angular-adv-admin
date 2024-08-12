import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficaComponent } from './grafica/grafica.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';


import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DashboardComponent,
    GraficaComponent,
    ProgressComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
  ],
  exports: [
    DashboardComponent,
    GraficaComponent,
    ProgressComponent,
    PagesComponent,
  ]
})
export class PagesModule { }
