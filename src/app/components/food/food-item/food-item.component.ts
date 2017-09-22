import { Component, OnInit, Input } from '@angular/core';
import { Fruit } from '../../../models/fruit';
@Component({
  selector: 'food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {

  @Input('fruit') fruit: Fruit;
  private name: string = 'Apple'; 
  private image: string = '';
  private rating: number =5; // 5/5
  constructor() { }

  ngOnInit() {

    console.log(this.fruit);
    
  }

}
