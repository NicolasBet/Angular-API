import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VerificarFestivosComponent } from './verificar-festivos/verificar-festivos.component';
import { ListarFestivosComponent } from './listar-festivos/listar-festivos.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule
import { HttpClientModule } from '@angular/common/http'; // Importar el módulo HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    VerificarFestivosComponent, // Verifica que se declare correctamente aquí
    ListarFestivosComponent, // Verifica también el nombre de ListarFestivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
