import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-section',
  standalone: false,
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.scss'
})
export class ProductSectionComponent {
  titulo!: string;
  tipo!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    this.titulo = params['titulo'];
    this.tipo = params['tipo'];
  });
}
}
