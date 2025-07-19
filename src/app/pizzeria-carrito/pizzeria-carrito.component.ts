import { Component, EventEmitter, Output } from '@angular/core';
import { CarritoProductService } from '../carrito-product.service';
import { Product } from '../product/product';
import { Observable } from 'rxjs';

@Component({
      selector: 'app-pizzeria-carrito',
      standalone: false,
      templateUrl: './pizzeria-carrito.component.html',
      styleUrl: './pizzeria-carrito.component.scss'
})
export class PizzeriaCarritoComponent {
  
      carritoList$: Observable<Product[]> = new Observable<Product[]>();
      total: number = 0;

      constructor(private carrito : CarritoProductService) {
            this.carritoList$ = this.carrito.carrito.asObservable();
            this.carritoList$.subscribe(() => {
                  this.total = this.carrito.getTotal();
            });
      }

      remove(product: Product): void {
            this.carrito.remove(product);
      } 

      comprar(): void {
            this.carrito.comprar();
      }

      vaciar(): void{
            this.carrito.vaciar();
      }

      reset(): void {
            this.carrito.resetAll();
      }
}
