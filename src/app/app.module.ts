import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './routing';
import { AppComponent } from './app.component';
import { FoodItemComponent } from './components/food/food-item/food-item.component';
import { CartBarComponent } from './components/cart/cart-bar/cart-bar.component';
import { FoodService } from './services/food.service';
import { CartService } from './services/cart.service';
import { HomeComponent } from './components/pages/home/home.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodItemComponent,
    CartBarComponent,
    HomeComponent,
    CheckoutComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [FoodService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
