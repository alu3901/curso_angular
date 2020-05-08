import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush  
})
export class TestComponent implements OnInit {

  constructor(private changeDetector: ChangeDetectorRef, private router: Router, route: ActivatedRoute) {
    const id: string = route.snapshot.params.id;
    const url: string = route.snapshot.url.join('');
    const user = route.snapshot.data.user;
   }

  ngOnInit(): void {
    /* Tarea computacioalmente costosa que guarda relación con la vista*/
    this.changeDetector.detectChanges(); 

    //this.router.navigateByUrl("/login");

    // this.router.paramMap.subscribe(params => {
    //   this.product = products[+params.get('productId')];
    // });


  }

}
