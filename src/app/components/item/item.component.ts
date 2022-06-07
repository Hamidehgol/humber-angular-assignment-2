import { ProductData } from 'src/app/modles/product-data.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item!: ProductData;


  
  constructor(private proService: ProductsService) { }

  ngOnInit(): void {
    
  }

  addToCart() {
    this.proService.cartItems.push(this.item)
  }

}
