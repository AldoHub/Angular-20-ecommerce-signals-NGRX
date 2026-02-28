import { Component, input, computed, inject } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { QtySelector } from '../qty-selector/qty-selector';
import { EcommerceStore } from '../../ecommerce-store';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-cart-item',
  imports: [QtySelector, MatIconButton, MatIcon],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss',
})
export class CartItemItem {

  public cartItem = input.required<CartItem>();
  store = inject(EcommerceStore);

  total = computed(() => {
    return this.cartItem().quantity * this.cartItem().product.price;
  });

  public setItemQuantity(quantity: number) {
    this.store.setItemQuantity(this.cartItem(), quantity);
  }

  
}
