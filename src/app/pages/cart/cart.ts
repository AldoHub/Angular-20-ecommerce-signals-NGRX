import { Component, inject } from '@angular/core';
import { BackButton } from '../../components/back-button/back-button';
import { CartList } from '../../components/cart-list/cart-list';
import { TeaseWishlist } from '../../components/tease-wishlist/tease-wishlist';
import { ViewPanel } from '../../directives/view-panel';
import { CartSummary } from '../../components/cart-summary/cart-summary';
import { MatButton } from '@angular/material/button';
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-cart',
  imports: [BackButton, CartList, TeaseWishlist, ViewPanel, CartSummary, MatButton],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {

  store = inject(EcommerceStore);

}
