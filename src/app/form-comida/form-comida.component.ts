import { Component } from '@angular/core';
import { Calorias } from '../calorias';
import { CaloriasService } from '../calorias.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-comida',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-comida.component.html',
  styleUrl: './form-comida.component.css',
})
export class FormComidaComponent {
  calorias = new Calorias(0, '', '');
  formInvalid = false;

  constructor(private caloriasService: CaloriasService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const nuevocalorias = new Calorias(
        this.calorias.id,
        this.calorias.comida,
        this.calorias.calorias
      );
      this.caloriasService.addCalorias(nuevocalorias);
      this.calorias = new Calorias(0, '', '');
    }
  }
}
