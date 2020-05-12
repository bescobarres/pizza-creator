import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPizzasComponent } from './mis-pizzas.component';

describe('MisPizzasComponent', () => {
  let component: MisPizzasComponent;
  let fixture: ComponentFixture<MisPizzasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisPizzasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
