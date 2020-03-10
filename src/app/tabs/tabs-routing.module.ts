import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'calculahora',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../calculahora/calculahora.module').then(m => m.CalculaHoraModule)
          }
        ]
      },
      {
        path: 'calculasalario',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../calculasalario/calculasalario.module').then(m => m.CalculaSalarioModule)
          }
        ]
      },
     {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
