import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,} from 'rxjs';
import { Compra } from './compra';
import { Product } from './product/product';

const API_URL = 'https://6674c3b275872d0e0a9779cd.mockapi.io/api/compras';

@Injectable({
  providedIn: 'root'
})
export class ComprasDataService {

  constructor(private http: HttpClient) { }

  gestionarPedido(productos: Product[]){
    const compra: Compra = {
      //nombre: '',
      //apellido: '',
      //ciudad: '',
      //direccion: '',
      hora: new Date(),
      productos: productos,
      //celular: 0,
      total: productos.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0),
    };
    this.createCompra(compra);
  }

  createCompra(compra: Compra): void {
    this.http.post(API_URL, compra).subscribe();
  }

  getAll(): Observable<Compra[]>{
    return this.http.get<Compra[]>(API_URL);
  } 

}
