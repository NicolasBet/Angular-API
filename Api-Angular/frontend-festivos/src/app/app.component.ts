import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-festivos';

  constructor(private router: Router) {} 

  navegarA(ruta: string) {
    this.router.navigate([ruta]); 
  }
}
