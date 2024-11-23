import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FestivosService } from '../services/festivos.service';

@Component({
  selector: 'app-verificar-festivos',
  standalone: true,
  imports: [FormsModule, CommonModule], // Agregar CommonModule a los imports
  templateUrl: './verificar-festivos.component.html',
  styleUrls: ['./verificar-festivos.component.css']
})
export class VerificarFestivosComponent {
  fecha: string = ''; // Fecha ingresada por el usuario
  resultado: string = ''; // Resultado del backend

  constructor(private festivosService: FestivosService) {}

  verificarFestivo() {
    console.log('Fecha ingresada:', this.fecha); // Log para verificar la entrada
    if (!this.fecha) {
      this.resultado = 'Por favor, ingrese una fecha válida.';
      return;
    }
  
    this.festivosService.verificarFechaFestiva(this.fecha).subscribe(
      (respuesta) => {
        console.log('Respuesta del backend:', respuesta); // Log para la respuesta exitosa
        this.resultado = respuesta.mensaje;
      },
      (error) => {
        console.error('Error del backend:', error); // Log para errores
        this.resultado = 'La fecha ingresada no es festiva o hubo un error.';
      }
    );
  }
  
  
}
