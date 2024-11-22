import { Component, OnInit } from '@angular/core';
import { FestivosService } from '../services/festivos.service';

@Component({
  selector: 'app-listar-festivos',
  templateUrl: './listar-festivos.component.html',
  styleUrls: ['./listar-festivos.component.css']
})
export class ListarFestivosComponent implements OnInit {
  festivos: any[] = [];
  cargando: boolean = false; 

  constructor(private festivosService: FestivosService) {}

  ngOnInit(): void {
    this.obtenerFestivos();
  }

  obtenerFestivos() {
    this.cargando = true;
    this.festivosService.obtenerFestivos().subscribe({
      next: (data) => {
        this.festivos = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al obtener los festivos', err);
        this.cargando = false;
      }
    });
  }
}

