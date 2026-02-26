import { Component, inject } from '@angular/core';
import { EcommerceStore } from '../../ecommerce-store';
import { ViewPanel } from '../../directives/view-panel';
import { CartItemItem } from '../cart-item/cart-item';


@Component({
  selector: 'app-cart-list',
  imports: [ViewPanel, CartItemItem],
  templateUrl: './cart-list.html',
  styleUrl: './cart-list.scss',
})
export class CartList {
  store = inject(EcommerceStore);
}
