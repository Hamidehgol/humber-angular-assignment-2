import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
@Output() searchedText : EventEmitter<string> = new EventEmitter()
  @Input() title = '';
  constructor() { }

  ngOnInit(): void {
  }
onSearch(text: string){
this.searchedText.emit(text);
}
}
