
import { OrderData } from 'src/app/modles/order-data.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {

  @Input() orderitem!: OrderData;
  constructor() { }

  ngOnInit(): void {
  }

}
