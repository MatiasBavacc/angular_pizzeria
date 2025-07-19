import { Component } from '@angular/core';
import { CarritoProductService } from './carrito-product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'Pizzeria';
  constructor(private carrito : CarritoProductService){}

  reset(): void {
      this.carrito.resetAll();
  }
}
