import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../../../models/cart';
@Component({
  selector: 'cart-bar',
  templateUrl: './cart-bar.component.html',
  styleUrls: ['./cart-bar.component.css']
})
export class CartBarComponent implements OnInit {

  @Input('cart') cart: Cart;
  constructor() { }

  ngOnInit() {
  }

}
