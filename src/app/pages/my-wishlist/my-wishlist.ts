import { Component, inject } from '@angular/core';
import { BackButton } from '../../components/back-button/back-button';
import { Product } from '../../models/product';
import { ProductCard } from '../../components/product-card/product-card';
import { RemoveProductButton } from '../../components/remove-product-button/remove-product-button';
import { EcommerceStore } from '../../ecommerce-store';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-wishlist',
  imports: [BackButton, ProductCard, RemoveProductButton, MatButton, RouterLink],
  templateUrl: './my-wishlist.html',
  styleUrl: './my-wishlist.scss',
})
export class MyWishlist {

  store = inject(EcommerceStore);

  clearWishlist() {
    this.store.clearWishlist();
  }

}
