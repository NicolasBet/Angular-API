import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificarFestivosComponent } from './verificar-festivos/verificar-festivos.component';
import { ListarFestivosComponent } from './listar-festivos/listar-festivos.component';

const routes: Routes = [
  { path: 'verificar-festivos', component: VerificarFestivosComponent },
  { path: 'listar-festivos', component: ListarFestivosComponent },
  { path: '', redirectTo: 'verificar-festivos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
