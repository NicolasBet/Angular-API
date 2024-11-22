import { Component } from '@angular/core';

@Component({
  selector: 'app-verificar-festivo',
  templateUrl: './verificar-festivos.component.html',
  styleUrls: ['./verificar-festivos.component.css']
})
export class VerificarFestivosComponent {
  fecha: string = ''; // Fecha ingresada
  esFestivo: boolean | null = null; // Resultado de la consulta

  verificarFestivo() {
    // Aquí iría la lógica para llamar al backend y verificar si es festivo
    // Por ejemplo, simularemos la respuesta:
    this.esFestivo = this.fecha === '2024-01-01'; // Ejemplo para Año Nuevo
  }
}
