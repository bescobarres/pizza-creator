import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreadorPizzaComponent } from './pizza-app/creador-pizza/creador-pizza.component';
import { MisPizzasComponent } from './pizza-app/creador-pizza/components/mis-pizzas/mis-pizzas.component';
import { FormularioPizzaComponent } from './pizza-app/creador-pizza/components/formulario-pizza/formulario-pizza.component';
import { AgregarIngredientePizzaComponent } from './pizza-app/creador-pizza/components/formulario-pizza/components/agregar-ingrediente-pizza/agregar-ingrediente-pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    CreadorPizzaComponent,
    MisPizzasComponent,
    FormularioPizzaComponent,
    AgregarIngredientePizzaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
