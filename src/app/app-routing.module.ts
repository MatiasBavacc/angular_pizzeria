import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzeriaPizzasComponent } from './pizzeria-pizzas/pizzeria-pizzas.component';
import { PizzeriaEmpanadasComponent } from './pizzeria-empanadas/pizzeria-empanadas.component';
import { PizzeriaHomeComponent } from './pizzeria-home/pizzeria-home.component';

const routes: Routes = [
  {
    path: '',
    component: PizzeriaHomeComponent,
  },
  {
    path: 'pizzas',
    component: PizzeriaPizzasComponent,
  },
  {
    path: 'empanadas',
    component: PizzeriaEmpanadasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
