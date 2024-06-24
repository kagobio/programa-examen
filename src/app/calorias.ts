export class Calorias {
  constructor(
    public id: number,
    public comida: string,
    public calorias: string,
    public gusta: boolean = false,
    public noGusta: boolean = false
  ) {}
}
