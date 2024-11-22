import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Importa el HttpClient
import { provideClientHydration } from '@angular/platform-browser';

import { routes } from './app.routes'; // Importa las rutas definidas en app.routes.ts

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Mejora el rendimiento al consolidar eventos
    provideRouter(routes), // Proveedor para enrutamiento
    provideHttpClient(), // Proveedor para el cliente HTTP
    provideClientHydration() // Proveedor para la hidratación del cliente
  ],
};
