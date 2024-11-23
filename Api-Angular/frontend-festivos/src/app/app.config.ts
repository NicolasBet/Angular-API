import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';  
import { provideHttpClient } from '@angular/common/http';  
import { CommonModule } from '@angular/common';  
import { VerificarFestivosComponent } from './verificar-festivos/verificar-festivos.component';
import { ListarFestivosComponent } from './listar-festivos/listar-festivos.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', redirectTo: 'verificar-festivos', pathMatch: 'full' },
      { path: 'verificar-festivos', component: VerificarFestivosComponent },
      { path: 'listar-festivos', component: ListarFestivosComponent }
    ])
  ]
};
