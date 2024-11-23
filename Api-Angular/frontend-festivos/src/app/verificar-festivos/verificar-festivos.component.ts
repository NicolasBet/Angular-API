import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { FestivosService } from '../services/festivos.service';

@Component({
  selector: 'app-verificar-festivos',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './verificar-festivos.component.html',
  styleUrls: ['./verificar-festivos.component.css']
})
export class VerificarFestivosComponent {
  fecha: string = ''; 
  resultado: string = ''; 

  constructor(private festivosService: FestivosService) {}

  verificarFestivo() {
    console.log('Fecha ingresada:', this.fecha); 
    if (!this.fecha) {
      this.resultado = 'Por favor, ingrese una fecha válida.';
      return;
    }
  
    this.festivosService.verificarFechaFestiva(this.fecha).subscribe(
      (respuesta) => {
        console.log('Respuesta del backend:', respuesta);
        this.resultado = respuesta.mensaje;
      },
      (error) => {
        console.error('Error del backend:', error); 
        this.resultado = 'La fecha ingresada no es festiva o hubo un error.';
      }
    );
  }
  
  
}
