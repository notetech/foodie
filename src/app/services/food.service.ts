import { Injectable } from '@angular/core';
import { Food } from '../models/food';
@Injectable()
export class FoodService {

  foodItems: Food[] = [];
  constructor() { 

    let _rowData = [
      {
        name: 'Apple',
        image: 'https://www.thesun.co.uk/wp-content/uploads/2017/01/gettyimages-185071735.jpg?strip=all&w=960',
        stock:5,
        price:30
      },
      {
        name: 'Banana',
        image: 'http://images6.fanpop.com/image/photos/34500000/Banana-3-bananas-34512789-1000-1000.jpg',
        stock:15,
        price:5
      },
      {
        name:'Grape',
        image:'https://www.fast-growing-trees.com/images/P/Concord-Grape-450w.jpg',
        stock:8,
        price:21
      }

    ]

    for(let i=0; i < _rowData.length; i++) {

      let _food = new Food();
      _food.id = i+1;
      _food.name = _rowData[i].name;
      _food.image = _rowData[i].image;
      _food.stock = _rowData[i].stock;
      _food.price = _rowData[i].price;

      this.foodItems.push(_food);

    }

  }

  getAllItems() {

    return this.foodItems;

  }

  updateFoodItem(food:Food) {


  }

}
