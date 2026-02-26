import { Component, input, computed, inject } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { QtySelector } from '../qty-selector/qty-selector';
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-cart-item',
  imports: [QtySelector],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss',
})
export class CartItemItem {

  public cartItem = input.required<CartItem>();
  store = inject(EcommerceStore);

  total = computed(() => {
    return this.cartItem().quantity * this.cartItem().product.price;
  });
}
