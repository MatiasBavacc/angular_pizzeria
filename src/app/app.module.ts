import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { ProductComponent } from './product/product.component';
import { PizzeriaPizzasComponent } from './pizzeria-pizzas/pizzeria-pizzas.component';
import { PizzeriaEmpanadasComponent } from './pizzeria-empanadas/pizzeria-empanadas.component';
import { PizzeriaCarritoComponent } from './pizzeria-carrito/pizzeria-carrito.component';
import { PizzeriaHomeComponent } from './pizzeria-home/pizzeria-home.component';
import { CountProductComponent } from './count-product/count-product.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    ProductComponent,
    PizzeriaPizzasComponent,
    PizzeriaEmpanadasComponent,
    PizzeriaCarritoComponent,
    PizzeriaHomeComponent,
    CountProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
