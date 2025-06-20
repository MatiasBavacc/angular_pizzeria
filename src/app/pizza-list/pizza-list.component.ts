import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductDataService } from '../product-data.service';
import { CarritoProductService } from '../carrito-product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pizza-list',
  standalone: false,
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.scss'
})

export class PizzaListComponent implements OnInit {
  @Input() titulo: string = 'Productos';
  @Input() tipo!: string;

  products: Product[] = [];

  products$: Observable<Product[]> = new Observable<Product[]>();

  constructor(private productService: ProductDataService, private productos: CarritoProductService){ 

    //this.products$ = this.productos.productsShop.asObservable();

  }

  ngOnInit(): void {
    /* this.productService.getProductByTipe(this.tipo)
      .subscribe((productsItems)=> this.products = productsItems
    ); */
    this.inicializar()
    this.cargarProductosShop();
  }

  cargarProductosShop(): void {
    
    this.productos.cargarProductosShop(this.tipo)
  }

  inicializar(){
    if(this.tipo === 'pizza'){
      this.products$ = this.productos.productsPizza.asObservable();
    }else if(this.tipo === 'empanada'){
      this.products$ = this.productos.productsEmpanada.asObservable();
    }else{
      this.products$ = this.productos.productsShop.asObservable();
    }
  }
}