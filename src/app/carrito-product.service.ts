import { Injectable } from '@angular/core';
import { Product } from './product/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductDataService } from './product-data.service';

@Injectable({
  providedIn: 'root'
})

export class CarritoProductService {
  private _carrito: Product[] = [];
  carrito: BehaviorSubject<Product[]> = new BehaviorSubject(this._carrito);
  //public items: Observable<Product[]> = this.carrito.asObservable();

  private _productsShop: Product[] = [];
  productsShop: BehaviorSubject<Product[]> = new BehaviorSubject(this._productsShop);

  private _productsEmpanada: Product[] = [];
  productsEmpanada: BehaviorSubject<Product[]> = new BehaviorSubject(this._productsShop);

  private _productsPizza: Product[] = [];
  productsPizza: BehaviorSubject<Product[]> = new BehaviorSubject(this._productsShop);

  constructor(private productService: ProductDataService,

  ) { }

  agregarAlCarrito(product: Product):void{
    if( (product.cantidad<=0) || (product.stock <= 0) ){

    }else{
      let item : Product | undefined = this._carrito.find((p1) => p1.nombre == product.nombre);
      if(item){
        item.cantidad += product.cantidad;
      }else{
        this._carrito.push({... product});
      }
      this.carrito.next(this._carrito);
      //console.log(this._carrito);
    }
  }
  
  remove(productCopia: Product, type: string):void{
    this._carrito = this._carrito.filter((p)=> p.nombre != productCopia.nombre);
    this.carrito.next(this._carrito);

    if(type === 'pizza'){
      this._productsPizza.map((p)=>{
        if(p.nombre == productCopia.nombre){
          p.stock += productCopia.cantidad;
          p.cantidad = 0; 
        }
      });
      this.productsPizza.next(this._productsPizza);
    }else if(type === 'empanada'){
      this._productsEmpanada.map((p)=>{
        if(p.nombre == productCopia.nombre){
          p.stock += productCopia.cantidad;
          p.cantidad = 0; 
        }
      });
      this.productsEmpanada.next(this._productsEmpanada);
    }else{
      this._productsShop.map((p)=>{
        if(p.nombre == productCopia.nombre){
          p.stock += productCopia.cantidad;
          p.cantidad = 0; 
        }
      });
      this.productsShop.next(this._productsShop);
    }
  }

  cargarProductosShop(type: string): void {
    if(type === 'pizza'){
      this.productService.getProductByTipe(type)
        .subscribe((productsItems)=>{  this._productsPizza = productsItems;
        this.productsPizza.next(this._productsPizza);
      });
    }else if(type === 'empanada'){
      this.productService.getProductByTipe(type)
        .subscribe((productsItems)=>{  this._productsEmpanada = productsItems;
        this.productsEmpanada.next(this._productsEmpanada);
      });
    }else{
        this.productService.getProductByTipe(type)
        .subscribe((productsItems)=>{  this._productsShop = productsItems;
        this.productsShop.next(this._productsShop);
      });
    }
  }
}
