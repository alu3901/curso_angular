import { Component, OnInit } from '@angular/core';
import { ElementoTienda } from '../interfaces/elemento-tienda';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {

  public elementosCarrito: Array<ElementoTienda> = [];
  public listaElementos: Array<ElementoTienda>

  constructor() { }

  public addCarrito(elemento: ElementoTienda){
    //Si un elemento tienen el mismo ID que el nuevo, quitar del array
    const index = this.elementosCarrito.findIndex(el=> el.id == elemento.id);
    if(index != -1){
      this.elementosCarrito.splice(index, 1 );
    }else{
      this.elementosCarrito.push(elemento);
    }
  }

  public isInCarrito(elemento: ElementoTienda){
      return this.elementosCarrito.some(e => e.id === elemento.id);
  }

  ngOnInit(): void {
    this.listaElementos = [
      {
        id : 1,
        nombre: "Papas Autodate",
        precio: 1.5,
        descripcion: "Papas del país precio al Kg",
        oculto: false
      },{      
        id : 2,
        nombre: "Secreto Ibérico",
        precio: 7,
        descripcion: "Carne fresca de la buena",
        oculto: false
      },{
        id : 3,
        nombre: "Parra",
        precio: 5,
        descripcion: "Bebida que sirve para curar todo tipo de herida",
        oculto: false
      },{
        id : 4,
        nombre: "Elemento oculto",
        precio: 5,
        descripcion: "No se come y está oculto",
        oculto: true
      }
    ]
  }

}
