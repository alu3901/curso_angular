import { Injectable } from '@angular/core';
import { PiezaRopa } from '../interfaces/pieza-ropa';

@Injectable({
  providedIn: 'root'
})
export class RopaServiceService {

  constructor() {}

  async getRopaColeccion(): Promise<Array<PiezaRopa>>{
    return new Promise( (resolve,reject) => {
      setTimeout( () => {
        resolve([
          {
            name: "Pantalones chinos",
            price: 40,
            stock: 17,
            designer: "Lola Vangalla",
            img: 'assets/1.jpg'
          },
          {
            name: "Camisa blanca",
            price: 25,
            stock: 5,
            designer: "Carlos Fomentera",
            img: 'assets/2.jpg'
          },
          {
            name: "Vestido de lunas",
            price: 49.95,
            stock: 11,
            designer: "Tania Magallanes",
            img: 'assets/3.jpg'
          },
          {
            name: "Blusa color salmón",
            price: 17,
            stock: 8,
            designer: "Roberto Rodríguez",
            img: 'assets/4.jpg'
          },
          {
            name: "Zapatillas unisex",
            price: 70,
            stock: 0,
            designer: "Carla Yuste",
            img: 'assets/5.jpg'
          },
        ])
      }, 600);
    });
  }

}
