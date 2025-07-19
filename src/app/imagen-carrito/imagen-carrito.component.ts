import { Component } from '@angular/core';
import { CarritoProductService } from '../carrito-product.service';
import { Observable } from 'rxjs';
import { Product } from '../product/product';

@Component({
    selector: 'app-imagen-carrito',
    standalone: false,
    templateUrl: './imagen-carrito.component.html',
    styleUrl: './imagen-carrito.component.scss'
})

export class ImagenCarritoComponent {
    image: string = '/img/carrito-lleno.png';
    
    carrito$: Observable<Product[]> = new Observable<Product[]>();
    
    constructor(private carrito: CarritoProductService){ 
        this.carrito$ = this.carrito.carrito.asObservable();
        this.carrito$.subscribe(() => {
            if (this.carrito.getTotal() === 0) {
                this.image = '/img/carrito.png';
            } else {
                this.image = '/img/carrito-lleno.png';
            }
        });
    }
}
