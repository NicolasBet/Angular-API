import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestivosService {
  private apiUrl = 'https://localhost:7281/api/FestivoControlador';

  constructor(private http: HttpClient) {}

  // Obtener todos los festivos
  obtenerFestivos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Verificar si una fecha es festiva
  verificarFechaFestiva(fecha: string): Observable<{ mensaje: string }> {
    return this.http.get<{ mensaje: string }>(`${this.apiUrl}/${fecha}`);
  }
}
