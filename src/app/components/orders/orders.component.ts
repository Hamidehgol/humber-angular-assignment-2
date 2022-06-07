import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orderArr: any;

  constructor(private proService: ProductsService) { }

  ngOnInit(): void {
    this.orderArr = this.proService.getOrderData().subscribe(
      res => { 
        this.orderArr = res; 
      });
  }

}