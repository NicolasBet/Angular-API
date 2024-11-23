import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router'; // Importa Router y RouterOutlet
import { CommonModule } from '@angular/common'; // Importa CommonModule si es necesario

@Component({
  selector: 'app-root',
  standalone: true, // Define el componente como standalone
  imports: [RouterOutlet, CommonModule], // Incluye RouterOutlet y CommonModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-festivos';

  constructor(private router: Router) {} // Inyecta el Router

  navegarA(ruta: string) {
    this.router.navigate([ruta]); // Cambia la ruta utilizando el Router
  }
}
