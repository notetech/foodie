import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../../../models/cart-item';
@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input('cartItem') cartItem: CartItem;

  constructor() { }

  ngOnInit() {
    
  }

  

  

}
