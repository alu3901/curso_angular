import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PiezaRopa } from '../interfaces/pieza-ropa';

@Component({
  selector: 'app-tarjeta-ropa',
  templateUrl: './tarjeta-ropa.component.html',
  styleUrls: ['./tarjeta-ropa.component.css']
})
export class TarjetaRopaComponent implements OnInit {


  @Input() piezaRopa: PiezaRopa;
  @Output() addedCarrito = new EventEmitter<PiezaRopa>();

  constructor() { }

  ngOnInit(): void {
  }

  addtoCarrito(piezaRopa: PiezaRopa){
    this.addedCarrito.emit(piezaRopa);
  }
  
  getStockColor(stock: number): string {
    if (stock >= 10) {
      return 'green';

    }else if(stock>0 && stock < 4){
      return 'red'
    }else{
      return 'orange';
    }
  }

}
