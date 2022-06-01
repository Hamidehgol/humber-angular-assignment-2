import { ProductData } from './../../modles/product-data.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemofproductData!: ProductData;
  

  constructor(private carts: ProductsService) { }

  ngOnInit(): void {

  }
  addtoItem(itemofproductData: any) {
    this.carts.addCartItems(itemofproductData);
  }
}