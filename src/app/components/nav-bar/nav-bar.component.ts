import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input() title = '';
  
  @Output() searchEntered: EventEmitter<string> = new EventEmitter()
  
  productArr: any;  

  constructor(private proService: ProductsService) { }

  ngOnInit(): void {
    this.productArr = this.proService.getProducts().subscribe(
      res =>{
        this.productArr = res; 
        
      });
  }
  
   
  onSearch(text: string) {  
    this.searchEntered.emit(text);
   } 

}
