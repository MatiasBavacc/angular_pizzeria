import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-product',
  standalone: false,
  templateUrl: './count-product.component.html',
  styleUrl: './count-product.component.scss'
})

export class CountProductComponent implements OnInit {
  @Input() cantidad!: number;
  @Input() max! : number;
  @Output() cantidadChange : EventEmitter<number> = new EventEmitter <number>();

  constructor() { }
  ngOnInit(): void {

  }
  sumarCantidad(): void{
    if(this.cantidad < this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  restarCantidad(): void{
    if(this.cantidad > 0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  actualizarCantidad(event: Event):void{
    let cant: number = Number((event.target as HTMLInputElement).value);
    if(cant >= 0 && cant <= this.max){
      this.cantidad = cant;
      this.cantidadChange.emit(this.cantidad);
    }
  }
}
