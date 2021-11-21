import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  availableDateProducts: Date = new Date ('2021-12-31');

  constructor() { }

  ngOnInit(): void {
  }

}
