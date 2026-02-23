import { Component, inject, input, computed } from '@angular/core';
import { Product } from '../../models/product';
import { MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-remove-product-button',
  imports: [MatIcon, MatIconButton],
  templateUrl: './remove-product-button.html',
  styleUrl: './remove-product-button.scss',
})
export class RemoveProductButton {
  store = inject(EcommerceStore);
  public product = input.required<Product>();

  public removeFromWishlist(product: Product) {    
    this.store.removeFromWishlist(product);
  }

}
