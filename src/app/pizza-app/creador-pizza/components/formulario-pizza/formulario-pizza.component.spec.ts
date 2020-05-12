import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPizzaComponent } from './formulario-pizza.component';

describe('FormularioPizzaComponent', () => {
  let component: FormularioPizzaComponent;
  let fixture: ComponentFixture<FormularioPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
