import { Component, computed, inject, input } from '@angular/core';
import { Product } from '../../models/product';
import { MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { MatButton } from "@angular/material/button";
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-wishlist-button',
  imports: [MatIcon, MatButton, MatIconButton],
  templateUrl: './wishlist-button.html',
  styleUrl: './wishlist-button.scss',
})
export class WishlistButton {
  
  store = inject(EcommerceStore);
  public product = input.required<Product>();

  isInWishlist = computed(() => {
    return this.store.wishlistItems().some(item => item.id === this.product().id);
  });

  public toggleWishlist(product: Product) {
    if(!this.isInWishlist()) {
      this.store.addToWishlist(product);
    } else {
      this.store.removeFromWishlist(product);
    }
  
  }
}
