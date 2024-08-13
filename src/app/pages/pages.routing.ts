import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaComponent } from './grafica/grafica.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const routes: Routes = [

  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data:{titulo: 'Dasboard'} },
      { path: 'progress', component: ProgressComponent, data:{titulo: 'Progress'}  },
      { path: 'grafica', component: GraficaComponent, data:{titulo: 'Grafica'}  },
      { path: 'ajustes', component: AccountSettingsComponent, data:{titulo: 'Ajustes'}  },
      { path: 'promesas', component: PromesasComponent,data:{titulo: 'Promesas'}  },
      { path: 'rxjs', component: RxjsComponent, data:{titulo: 'Rxjs'}  }

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
