import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemPickerComponent } from './list-item-picker.component';

describe('ListItemPickerComponent', () => {
  let component: ListItemPickerComponent;
  let fixture: ComponentFixture<ListItemPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
