import { Injectable } from '@angular/core';
import { Product } from './product/product';
import { HttpClient } from '@angular/common/http';
import { concatMap, delay, map, Observable, of, tap } from 'rxjs';

const API_URL = 'https://6674c3b275872d0e0a9779cd.mockapi.io/api/product';


@Injectable({
    providedIn: 'root'
})

export class ProductDataService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<Product[]>{
        return this.http.get<Product[]>(API_URL)
            .pipe(
                tap((products: Product[])=> {
                    for(let product of products){
                        product.cantidad = 0;
                        if(product.promo){
                            product.tags += ' promo oferta descuento';
                        }
                    }
                })
            );
    }

    resetAll(): void {
        this.getJsonLocal().subscribe((productos: Product[]) => {
            of(...productos).pipe(
                concatMap((producto: Product, algo) =>
                    this.http.put(API_URL + '/' + producto.id, producto).pipe(delay(300))
            )
            ).subscribe();
        });
    }

    getJsonLocal(): Observable<any> {
        return this.http.get('./productos.json');
    }

    modificarProducto(p: Product){
        this.http.put(API_URL + '/' + p.id, p).subscribe({
            next: (respuesta) => console.log('Producto modificado:', respuesta),
            error: (err) => console.error('Error al modificar producto:', err)
        });
    }
}
