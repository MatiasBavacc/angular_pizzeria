import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductDataService } from '../product-data.service';
import { CarritoProductService } from '../carrito-product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})

export class ProductListComponent implements OnInit {
  @Input() titulo: string = 'Productos';
  @Input() tipo!: string;

  products$: Observable<Product[]> = new Observable<Product[]>();

  constructor(private productService: ProductDataService, private productos: CarritoProductService){ 

    this.products$ = this.productos.productsShop.asObservable();

  }

  ngOnInit(): void {
    /* this.productService.getProductByTipe(this.tipo)
      .subscribe((productsItems)=> this.products = productsItems
    ); */
    this.cargarProductosShop();
  }

  cargarProductosShop(): void {
    this.productos.cargarProductosShop();
  }

}