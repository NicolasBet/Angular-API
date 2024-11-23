import { Routes } from '@angular/router';
import { VerificarFestivosComponent } from './verificar-festivos/verificar-festivos.component';
import { ListarFestivosComponent } from './listar-festivos/listar-festivos.component';

export const routes: Routes = [
  { path: 'verificar-festivo', component: VerificarFestivosComponent },
  { path: 'listar-festivos', component: ListarFestivosComponent }, 
  { path: '', redirectTo: '/verificar-festivo', pathMatch: 'full' }, 
];
