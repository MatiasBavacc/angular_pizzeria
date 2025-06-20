import { Component, Input } from '@angular/core';
import { Product } from './product';
import { FormsModule } from '@angular/forms';
import { CarritoProductService } from '../carrito-product.service';


@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!: Product;

  constructor(
    private carrito : CarritoProductService
  ){}

  ngOnInit(): void {
    
  }

  getPromo(product: Product):string {
    if(product.promo){
      return "Si";
    }
    return "No";
    //return product.promo ? '¡Promo!' : 'Sin promo';
  }

  getStock(product: Product):number{
    return product.stock;
  }

  agregarAlCarrito(product : Product):void{
    this.carrito.agregarAlCarrito(product);
    product.stock -= product.cantidad;
    product.cantidad = 0;
  }
  
}
