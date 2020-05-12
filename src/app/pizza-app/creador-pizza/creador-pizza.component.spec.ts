import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreadorPizzaComponent } from './creador-pizza.component';

describe('CreadorPizzaComponent', () => {
  let component: CreadorPizzaComponent;
  let fixture: ComponentFixture<CreadorPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreadorPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreadorPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
