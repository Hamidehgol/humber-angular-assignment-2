import { ProductData } from './../../modles/product-data.interface';
import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() item!: ProductData;
  
  productArray: ProductData[] | any;
  filteredProducts: ProductData[] | any;
  constructor(private proService: ProductsService) { }

  ngOnInit(): void {
    this.productArray = this.proService.getProducts().subscribe(
      res =>{
        this.productArray = res; 
        this.filteredProducts = this.productArray;
      });

  }
 
  filteredProductsBySearch(text: string) {
    if (text !== "") {
      this.filteredProducts = this.productArray.filter((product:any) => {
        const lowerCaseText = text.toLowerCase();
        const lowerCaseProductName = product.name.toLowerCase();
        return lowerCaseProductName.includes(lowerCaseText);
      })
    } else {
      this.filteredProducts = this.productArray;
    }
  }
  

}

