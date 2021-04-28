import { DatepipeComponent } from './datepipe/datepipe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';

import { AppComponent } from './app.component';
import { AgendaTaskComponent } from './agenda-task/agenda-task.component';

import { TarefasComponent } from './tarefas/tarefas.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'agenda'
  },
  {
    path: 'agenda',
    component: AgendaComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tests-tarefas'
  },
  {
    path: 'tests-tarefas',
    component: TarefasComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
