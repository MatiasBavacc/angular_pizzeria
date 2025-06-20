import { Injectable } from '@angular/core';
import { Product } from './product/product';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

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
          }
        })
      );
  }

  getProductByTipe(type: string): Observable<Product[]> {
    return this.getAll().pipe(
      map(products => products.filter(product => product.tipo === type))
    );
  }
  
}
