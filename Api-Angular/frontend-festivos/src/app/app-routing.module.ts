import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificarFestivosComponent } from './verificar-festivos/verificar-festivos.component';
import { ListarFestivosComponent } from './listar-festivos/listar-festivos.component';

const routes: Routes = [
  { path: '', redirectTo: 'listar-festivos', pathMatch: 'full' },
  { path: 'listar-festivos', component: ListarFestivosComponent },
  { path: 'verificar-festivos', component: VerificarFestivosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
