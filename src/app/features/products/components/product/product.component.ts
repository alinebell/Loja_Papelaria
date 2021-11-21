import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  product?: Products;

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(){
    alert('Produto adicionado ao carrinho!')
  }


}
