import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { PizzeriaCarritoComponent } from './pizzeria-carrito/pizzeria-carrito.component';
import { PizzeriaHomeComponent } from './pizzeria-home/pizzeria-home.component';
import { CountProductComponent } from './count-product/count-product.component';
import { HttpClientModule } from '@angular/common/http';
import { BuscadorComponent } from './buscador/buscador.component';
import { ProductSectionComponent } from './product-section/product-section.component';
import { PromocionComponent } from './promocion/promocion.component';
import { ImagenCarritoComponent } from './imagen-carrito/imagen-carrito.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    PizzeriaCarritoComponent,
    PizzeriaHomeComponent,
    CountProductComponent,
    BuscadorComponent,
    ProductSectionComponent,
    PromocionComponent,
    ImagenCarritoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
