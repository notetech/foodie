import { CartItem } from './cart-item';
import { Food } from './food'
export class Cart {
    cartItems : CartItem[] = [];
    addToCart(food: Food) {

        // Check if the product exist or not

        let existingCartItemIndex = this.cartItems.findIndex((ci:CartItem) => {

            return ci.product.id == food.id;
        
        })


        if( existingCartItemIndex > -1) {

            this.cartItems[existingCartItemIndex].quantiy += 1;
            
        }

        else {

            let _cartItem = new CartItem();
            _cartItem.product = food;
            _cartItem.quantiy = 1;

            this.cartItems.push(_cartItem);

        }

    }

    getNumberOfItems() {

        if(this.cartItems) {

            return this.cartItems.reduce((total,cartItem) => {

                return total + cartItem.quantiy;
            },0)
        }

        return 0;
    }

    getTotalPrice() {

        if(this.cartItems) {

            return this.cartItems.reduce((totalPrice,cartItem) => {

                return totalPrice + cartItem.getTotalPrice();

            },0)
        }
    }
}