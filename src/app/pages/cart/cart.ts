import { Component } from '@angular/core';
import { BackButton } from '../../components/back-button/back-button';
import { CartList } from '../../components/cart-list/cart-list';
import { TeaseWishlist } from '../../components/tease-wishlist/tease-wishlist';
import { ViewPanel } from '../../directives/view-panel';

@Component({
  selector: 'app-cart',
  imports: [BackButton, CartList, TeaseWishlist, ViewPanel],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {

}
