import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaRopaComponent } from './tarjeta-ropa.component';

describe('TarjetaRopaComponent', () => {
  let component: TarjetaRopaComponent;
  let fixture: ComponentFixture<TarjetaRopaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaRopaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaRopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
