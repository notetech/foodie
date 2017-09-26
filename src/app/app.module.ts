import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodItemComponent } from './components/food/food-item/food-item.component';
import { CartBarComponent } from './components/cart/cart-bar/cart-bar.component';


import { FoodService } from './services/food.service';

@NgModule({
  declarations: [
    AppComponent,
    FoodItemComponent,
    CartBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
