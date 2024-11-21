import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestivosService {
  private apiUrl = 'http://localhost:5179/api/festivo'; // Ajustar a tu backend

  constructor(private http: HttpClient) {}

  verificarFechaFestiva(fecha: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/es-festivo?fecha=${fecha}`);
  }

  obtenerFestivosPorAnio(anio: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/obtener-por-anio?anio=${anio}`);
  }
}
