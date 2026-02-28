import { Component, inject, computed } from '@angular/core';
import { EcommerceStore } from '../../ecommerce-store';
import { ViewPanel } from '../../directives/view-panel';

@Component({
  selector: 'app-cart-summary',
  imports: [ViewPanel],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.scss',
})
export class CartSummary {

  store = inject(EcommerceStore);

  subTotal = computed(() => this.store.cartItems().reduce((acc, item) => {
    return acc + item.quantity * item.product.price;
  }, 0));

  tax = computed(() => 0.05 * this.subTotal());

  total = computed(() => this.subTotal() + this.tax());
}
