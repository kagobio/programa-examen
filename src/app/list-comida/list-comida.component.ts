import { Component } from '@angular/core';
import { Calorias } from '../calorias';
import { CaloriasService } from '../calorias.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-comida',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-comida.component.html',
  styleUrl: './list-comida.component.css',
})
export class ListComidaComponent {
  calorias: Calorias[] = [];
  comida: string = '';

  constructor(private caloriasService: CaloriasService) {
    this.caloriasService.getCalorias();
    this.calorias = this.caloriasService.calorias;
  }

  addCalorias() {
    this.caloriasService.addCalorias({
      id: 0,
      comida: this.comida,
      calorias: '',
      gusta: false,
      noGusta: false,
    });
    this.comida = '';
  }

  deleteCalorias(id: number) {
    this.caloriasService.deleteCalorias(id);
  }

  marcarMegusta(id: number) {
    this.caloriasService.marcarMegusta(id);
  }

  marcarNoGusta(id: number) {
    this.caloriasService.marcarNoGusta(id);
  }

  updateCalorias(id: number, calorias: Calorias) {
    this.caloriasService.updateCalorias(id, calorias);
  }
  deleteAllCalorias() {
    this.caloriasService.deleteAllCalorias();
  }
}
