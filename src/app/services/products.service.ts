import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public listOfProducts = new BehaviorSubject<any>([]);

  cartofItems: any = [];

  constructor(private http: HttpClient) { }

  
  getProducts() {
    return this.http.get('/assets/product-data.json');
  }

  getOrders() {
    
    return this.http.get('/assets/order-data.json');
  }

  getCartItems(){
    return this.listOfProducts.asObservable();
  }

  setCartItems(product: any){
    this.cartofItems.push(product);
    this.listOfProducts.next(product);
  }

  addCartItems(product: any){
    this.cartofItems.push(product);
    this.listOfProducts.next(this.cartofItems);
    console.log(this.cartofItems);
  }

  clearCart() {
    this.cartofItems = [];
    this.listOfProducts.next(this.cartofItems);
  }


}
