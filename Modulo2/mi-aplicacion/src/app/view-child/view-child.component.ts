import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  @ViewChild('square') square: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarColor(){
    this.square.nativeElement.style.backgroundColor='red';
  }

}
