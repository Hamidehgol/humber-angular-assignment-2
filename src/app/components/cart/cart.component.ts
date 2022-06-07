import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/app/modles/product-data.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: ProductData[] = [];

  constructor(private proService: ProductsService) { }

  ngOnInit(): void {

    this.cartItems = this.proService.getCartItems();  
   
  }

  calledClearCart() {
    this.proService.clearCart();     
    this.cartItems = [];
  }
}
