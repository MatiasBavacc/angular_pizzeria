import { Injectable } from '@angular/core';
import { Product } from './product/product';
import { BehaviorSubject, delay, forkJoin} from 'rxjs';
import { ProductDataService } from './product-data.service';
import { ComprasDataService } from './compras-data.service';

@Injectable({
  	providedIn: 'root'
})

export class CarritoProductService {
      
	private _carrito: Product[] = [];
	carrito: BehaviorSubject<Product[]> = new BehaviorSubject(this._carrito);

	private _productosOriginales: Product[] = [];
	private _productsShop: Product[] = [];
	productsShop: BehaviorSubject<Product[]> = new BehaviorSubject(this._productsShop);

	constructor(private productService: ProductDataService,
		private compras: ComprasDataService
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
		}
	}
  
	remove(productCopia: Product):void{
		this._carrito = this._carrito.filter((p)=> p.nombre != productCopia.nombre);
		this.carrito.next(this._carrito);

		this._productsShop.map((p)=>{
			if(p.nombre == productCopia.nombre){
			p.stock += productCopia.cantidad;
			p.cantidad = 0; 
			}
		});
		this.productsShop.next(this._productsShop);

	}

	getTotal(): number{
		let total : number = 0;
		for(let p of this._carrito){
			total += p.precio * p.cantidad;
		}	
		return total;
	}


	cargarProductosShop(): void {
		this.productService.getAll().subscribe((productsItems) => {
			this._productosOriginales = productsItems;
			this._productsShop = productsItems.map((pOriginal) => {
				const enCarrito = this._carrito.find((c) => c.nombre === pOriginal.nombre);
				return {
					...pOriginal,
					stock: pOriginal.stock - (enCarrito?.cantidad || 0),
					cantidad: enCarrito?.cantidad || 0
				};
			});
			this.productsShop.next(this._productsShop);
		});
	}

	filtrarTags(palabra: string): void {
		const palabraNormalizada = palabra
			.toLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '');

		if (palabraNormalizada.length === 0) {
			this._productsShop = [...this._productosOriginales];
		} 
		else {
			this._productsShop = this._productosOriginales.filter((p) =>
			p.tags
			.toLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.includes(palabraNormalizada)
			);
		}
		
		this.productsShop.next(this._productsShop);
	}

	comprar(): void{
		this.compras.gestionarPedido(this._carrito);
		this._carrito.forEach((producto) => {
			producto.stock -= producto.cantidad;
			producto.cantidad = 0;
			this.productService.modificarProducto(producto);
		});
		this._carrito = [];
		this.carrito.next(this._carrito);
		this.productsShop.next(this._productsShop);
		alert('Gracias por su compra!');
	}

	vaciar(): void {
		this._carrito = [];
		this.carrito.next(this._carrito);
		this._productsShop = this._productosOriginales.map((pOriginal) => {
			return {
				...pOriginal,
				stock: pOriginal.stock + pOriginal.cantidad,
				cantidad: 0
			};
		});
		this.productsShop.next(this._productsShop);
		setTimeout(() => {
			this.cargarProductosShop();
		}, 3000);
      }

	resetAll(): void {
		this.productService.resetAll();
		this._carrito = [];
		this.carrito.next(this._carrito);
		this.cargarProductosShop();
		setTimeout(() => {
			this.cargarProductosShop();
		}, 3000);
	}
}
