import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit {

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    /* Tarea computacioalmente costosa que guarda relación con la vista*/
    this.changeDetector.detectChanges(); 
  }

}
