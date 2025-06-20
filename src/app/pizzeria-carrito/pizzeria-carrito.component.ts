import { Component, EventEmitter, Output } from '@angular/core';
import { CarritoProductService } from '../carrito-product.service';
import { Product } from '../product/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-pizzeria-carrito',
  standalone: false,
  templateUrl: './pizzeria-carrito.component.html',
  styleUrl: './pizzeria-carrito.component.scss'
})
export class PizzeriaCarritoComponent {
  
  carritoList$: Observable<Product[]> = new Observable<Product[]>();

  constructor(private carrito : CarritoProductService) {
    this.carritoList$ = this.carrito.carrito.asObservable();
  }

  remove(product: Product, type: string): void {
    this.carrito.remove(product, type);
  } 

}
