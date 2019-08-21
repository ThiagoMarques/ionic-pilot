import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'salas', loadChildren: './pages/salas/salas.module#SalasPageModule' },
  { path: 'agendamento', loadChildren: './pages/agendamento/agendamento.module#AgendamentoPageModule' },
  { path: 'meus-agendamentos', loadChildren: './pages/meus-agendamentos/meus-agendamentos.module#MeusAgendamentosPageModule' },
  { path: 'detalhes-sala/:id', loadChildren: './pages/detalhes-sala/detalhes-sala.module#DetalhesSalaPageModule' },
  { path: 'edit-sala/:id', loadChildren: './pages/edit-sala/edit-sala.module#EditSalaPageModule' },
  { path: 'add-sala', loadChildren: './pages/add-sala/add-sala.module#AddSalaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
