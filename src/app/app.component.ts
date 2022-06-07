import { ProductData } from './modles/product-data.interface';
import { Component, Input } from '@angular/core';
import { ProductsService } from './services/products.service';
import { OrderData } from './modles/order-data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'humber-angular-assignment-2';


  constructor(private proService: ProductsService) { }

  ngOnInit(): void {
     
  }

}
