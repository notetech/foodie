import { Component , OnInit } from '@angular/core';
import { Fruit } from './models/fruit';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  fruits: Fruit[] = [];

  ngOnInit() {

    console.log('App component init')


    let f1 = new Fruit();
    f1.name = 'Apple'
    f1.image = 'https://www.thesun.co.uk/wp-content/uploads/2017/01/gettyimages-185071735.jpg?strip=all&w=960';
    f1.rating = 5;

    let f2 = new Fruit();
    f2.name = 'Banana'
    f2.image = 'http://images6.fanpop.com/image/photos/34500000/Banana-3-bananas-34512789-1000-1000.jpg';
    f2.rating = 4;

    this.fruits = [f1,f2]

    console.info('Fruits , ',this.fruits);
  }


  
}
