import { Component, OnInit } from '@angular/core';
import { RopaServiceService } from './services/ropa-service.service';
import { PiezaRopa } from './interfaces/pieza-ropa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mi-aplicacion';
  collection: Array<PiezaRopa>;

  constructor(private ropaService: RopaServiceService ){

  }

  addedToCarrito(piezaRopa: PiezaRopa){
    alert("Se ha añadido al carrito : " + piezaRopa.name);
  }

  async ngOnInit() {
    this.collection = await this.ropaService.getRopaColeccion();
  }
}
