import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestReactiveFormsComponent } from './test-reactive-forms.component';

describe('TestReactiveFormsComponent', () => {
  let component: TestReactiveFormsComponent;
  let fixture: ComponentFixture<TestReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
