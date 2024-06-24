import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComidaComponent } from './form-comida/form-comida.component';
import { ListComidaComponent } from './list-comida/list-comida.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComidaComponent, ListComidaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `<app-form-comida></app-form-comida
    ><app-list-comida></app-list-comida>`,
})
export class AppComponent {
  title = 'programa-examen';
}
