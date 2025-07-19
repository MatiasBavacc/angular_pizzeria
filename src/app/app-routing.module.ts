import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzeriaHomeComponent } from './pizzeria-home/pizzeria-home.component';
import { ProductSectionComponent } from './product-section/product-section.component'; 
import { PromocionComponent } from './promocion/promocion.component'; 
import { PizzeriaCarritoComponent } from './pizzeria-carrito/pizzeria-carrito.component';
import { ContactoComponent } from './contacto/contacto.component';


const routes: Routes = [
  {
    path: '',
    component: PizzeriaHomeComponent,
  },
  {
    path: 'productos',
    component: ProductSectionComponent,
  },
  {
    path: 'ofertas',
    component: PromocionComponent,
  },
  {
    path: 'carrito',
    component: PizzeriaCarritoComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
