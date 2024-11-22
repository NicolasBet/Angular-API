import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-festivos',
  templateUrl: './listar-festivos.component.html',
  styleUrls: ['./listar-festivos.component.css']
})
export class ListarFestivosComponent implements OnInit {
  festivos: { fecha: string; nombre: string }[] = []; // Lista de festivos
  cargando: boolean = false; // Indicador de carga

  ngOnInit(): void {
    this.obtenerFestivos();
  }

  obtenerFestivos() {
    this.cargando = true;

    // Simulación de datos: reemplazar con una llamada al backend
    setTimeout(() => {
      this.festivos = [
        { fecha: '2024-01-01', nombre: 'Año Nuevo' },
        { fecha: '2024-04-07', nombre: 'Viernes Santo' },
        { fecha: '2024-12-25', nombre: 'Navidad' },
      ];
      this.cargando = false;
    }, 1000);
  }
}
