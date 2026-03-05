import { Component, inject, input, computed, signal } from '@angular/core';
import { EcommerceStore } from '../../ecommerce-store';
import { BackButton } from '../../components/back-button/back-button';
import { Product } from '../../models/product';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { QtySelector } from '../../components/qty-selector/qty-selector';

@Component({
  selector: 'app-product-view',
  imports: [BackButton, MatButton, MatIcon, QtySelector],
  templateUrl: './product-view.html',
  styleUrl: './product-view.scss',
})
export class ProductView {

  public store = inject(EcommerceStore);
  id = input.required<string>();
  quantity = signal(1);

  constructor() {
    this.store.setProduct(this.id);
  }

  backRoute = computed(() => {
    return `/products/${this.store.category()}`;
  });


  public storeAaddToCart(product: Product) {
    this.store.addToCart({product, quantity: this.quantity()});
  }

}
