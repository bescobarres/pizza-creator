import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarIngredientePizzaComponent } from './agregar-ingrediente-pizza.component';

describe('AgregarIngredientePizzaComponent', () => {
  let component: AgregarIngredientePizzaComponent;
  let fixture: ComponentFixture<AgregarIngredientePizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarIngredientePizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarIngredientePizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
