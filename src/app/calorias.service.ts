import { Injectable } from '@angular/core';
import { Calorias } from './calorias';

@Injectable({
  providedIn: 'root',
})
export class CaloriasService {
  updateCalorias(index: number, calorias: Calorias) {
    this.calorias[index] = calorias;
    this.saveCalorias();
  }

  calorias: Calorias[] = [];
  constructor() {
    this.getCalorias();
  }

  addCalorias(calorias: Calorias) {
    this.calorias.push(calorias);
    this.saveCalorias();
  }

  getCalorias() {
    const addCalorias = localStorage.getItem('calorias');
    if (addCalorias) {
      this.calorias = JSON.parse(addCalorias);
    }
  }

  saveCalorias() {
    localStorage.setItem('calorias', JSON.stringify(this.calorias));
  }

  deleteCalorias(index: number) {
    this.calorias.splice(index, 1);
    this.saveCalorias();
  }

  marcarMegusta(index: number) {
    this.calorias[index].gusta = !this.calorias[index].gusta;
    this.saveCalorias();
  }

  marcarNoGusta(index: number) {
    this.calorias[index].noGusta = !this.calorias[index].noGusta;
    this.saveCalorias();
  }
  deleteAllCalorias() {
    this.calorias = [];
    this.saveCalorias();
  }
}
