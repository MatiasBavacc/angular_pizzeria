import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductDataService } from '../product-data.service';
import { CarritoProductService } from '../carrito-product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promocion',
  standalone: false,
  templateUrl: './promocion.component.html',
  styleUrl: './promocion.component.scss'
})
export class PromocionComponent {
  titulo: string = 'Promociones';

  products$: Observable<Product[]> = new Observable<Product[]>();

  constructor(private productService: ProductDataService, private productos: CarritoProductService){ 
    this.products$ = this.productos.productsShop.asObservable();
  }

  ngOnInit(): void {
    this.cargarProductosShop();
  }

  cargarProductosShop(): void {
    this.productos.cargarProductosShop();
  }


}
