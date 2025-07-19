import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CarritoProductService } from './carrito-product.service';
import { Product } from './product/product';


@Injectable({
  providedIn: 'root'
})
export class BusquedaResultadoService {

  private mostrarResultados = new BehaviorSubject<boolean>(false);
  mostrarResultados$ = this.mostrarResultados.asObservable();

  productsBusqueda$: Observable<Product[]> = new Observable<Product[]>();

  constructor(private productos: CarritoProductService,) { 
    this.productsBusqueda$ = this.productos.productsShop.asObservable();
  }

  ngOnInit(): void {
    this.productos.cargarProductosShop();
  }

  mostrar() {
    this.mostrarResultados.next(true);
  }

  ocultar() {
    this.mostrarResultados.next(false);
  }

  buscar(palabra: string){
    this.productos.filtrarTags(palabra);
  }

}
