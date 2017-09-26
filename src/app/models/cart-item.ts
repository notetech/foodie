import { Food } from './food';
export class CartItem {

    product:Food;
    quantiy; number = 0;

    getTotalPrice() {

        return this.product.price * this.quantiy;
    }

}