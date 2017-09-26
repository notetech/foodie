import { Component , OnInit } from '@angular/core';
import { Food } from './models/food';
import { Cart } from './models/cart';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  foodItems: Food[] = [];

  cart: Cart = new Cart();

  ngOnInit() {

    console.log('App component init')


    let f1 = new Food();
    f1.id = 1;
    f1.name = 'Apple'
    f1.image = 'https://www.thesun.co.uk/wp-content/uploads/2017/01/gettyimages-185071735.jpg?strip=all&w=960';
    f1.rating = 5;
    f1.stock = 10;
    f1.price = 30;

    let f2 = new Food();
    f2.id = 2;
    f2.name = 'Banana'
    f2.image = 'http://images6.fanpop.com/image/photos/34500000/Banana-3-bananas-34512789-1000-1000.jpg';
    f2.rating = 4;
    f2.stock = 19;
    f2.price = 5;

    this.foodItems = [f1,f2]

    console.info('Fruits , ',this.foodItems);
  }

  onAddToCartHandler(food: Food) {

    this.cart.addToCart(food);

    console.log('Cart Updated ', this.cart)
    
  }

  
}
