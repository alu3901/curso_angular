import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-reactive-forms',
  templateUrl: './test-reactive-forms.component.html',
  styleUrls: ['./test-reactive-forms.component.css']
})
export class TestReactiveFormsComponent implements OnInit {

  profileForm = new  FormGroup({
    firstname: new FormControl(''),
    lastName: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
