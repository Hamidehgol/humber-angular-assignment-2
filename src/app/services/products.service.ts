import { OrderData } from './../modles/order-data.interface';
import { ProductData } from './../modles/product-data.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  subject = new Subject()
  private listOfProducts = [];
  cartItems: ProductData[] = [];
  

  constructor(private http: HttpClient) { }

  getProducts() {
    
    return this.http.get('/assets/product-data.json')as Observable<ProductData>;
    
  }  

  getOrderData(): Observable<OrderData> {
    // http call to retrieve list of orders
    return this.http.get('/assets/order-data.json')as Observable<OrderData>;    
  }



  setCartItems(product:ProductData[]) {
    this.cartItems = product;
    
  }

  getCartItems () {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }
}
