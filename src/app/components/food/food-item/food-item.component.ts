import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../../../models/food';

@Component({
  selector: 'food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {

  @Input('food') food: Food;

  @Output('onAddToCart') onAddToCart: EventEmitter<Food> = new EventEmitter();

  private name: string = 'Apple'; 
  private image: string = '';
  private rating: number =5; // 5/5
  constructor() { }

  ngOnInit() {

    console.log(this.food);

    
    
  }

  addToCart() {

    this.food.stock -= 1;
    this.onAddToCart.emit(this.food)
  }

}
