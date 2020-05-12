import { Injectable } from '@angular/core';
import { PiezaRopa } from '../interfaces/pieza-ropa';

@Injectable({
  providedIn: 'root'
})
export class RopaServiceService {

  constructor() {}

  async getRopaColeccion(): Promise<Array<PiezaRopa>>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            name: "pepe",
            price: 17,
            stock: 11,
            designer: "asdas",
            img: 'assets/1.jpg'
          },          {
            name: "pepe2",
            price: 17,
            stock: 11,
            designer: "asdas",
            img: 'assets/2.jpg'
          }
        ])
      }, 600);
    })
  }
}
