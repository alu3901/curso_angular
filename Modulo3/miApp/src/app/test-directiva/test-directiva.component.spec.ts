import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDirectivaComponent } from './test-directiva.component';

describe('TestDirectivaComponent', () => {
  let component: TestDirectivaComponent;
  let fixture: ComponentFixture<TestDirectivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDirectivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDirectivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
