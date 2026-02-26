import { Component } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { Product } from '../../models/product';
import { EcommerceStore } from '../../ecommerce-store';
import { BackButton } from '../../components/back-button/back-button';
import { CartList } from '../../components/cart-list/cart-list';

@Component({
  selector: 'app-cart',
  imports: [BackButton, CartList],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {

}
