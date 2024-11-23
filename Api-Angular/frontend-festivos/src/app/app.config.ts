import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';  // Asegúrate de tener esta importación
import { provideHttpClient } from '@angular/common/http';  // Si usas httpClient en otros servicios
import { CommonModule } from '@angular/common';  // Importar CommonModule si es necesario
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
