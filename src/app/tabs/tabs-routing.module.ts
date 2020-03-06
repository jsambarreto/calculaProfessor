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
     /*{
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },*/
      {
        path: '',
        redirectTo: '/tabs/calculahora',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/calculahora',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
