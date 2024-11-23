import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FestivosService } from '../services/festivos.service';

@Component({
  selector: 'app-listar-festivos',
  standalone: true,
  imports: [CommonModule], // Agregar CommonModule a los imports
  templateUrl: './listar-festivos.component.html',
  styleUrls: ['./listar-festivos.component.css']
})
export class ListarFestivosComponent {
  festivos: any[] = []; // Lista de festivos

  constructor(private festivosService: FestivosService) {}

  ngOnInit() {
    this.festivosService.obtenerFestivos().subscribe(
      (resultado) => {
        this.festivos = resultado;
      },
      (error) => {
        console.error('Error al obtener los festivos:', error);
      }
    );
  }
}
