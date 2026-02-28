import { Component } from '@angular/core';
import { BackButton } from '../../components/back-button/back-button';
import { CartList } from '../../components/cart-list/cart-list';
import { TeaseWishlist } from '../../components/tease-wishlist/tease-wishlist';
import { ViewPanel } from '../../directives/view-panel';
import { CartSummary } from '../../components/cart-summary/cart-summary';

@Component({
  selector: 'app-cart',
  imports: [BackButton, CartList, TeaseWishlist, ViewPanel, CartSummary],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {

}
