import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from '../../components/product-card/product-card';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatNavList, MatListItem, MatListItemTitle } from '@angular/material/list';
import { RouterLink } from "@angular/router";
import { TitleCasePipe } from '@angular/common';
import { EcommerceState, EcommerceStore } from '../../ecommerce-store';
import { WishlistButton } from '../../components/wishlist-button/wishlist-button';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard, WishlistButton,MatSidenav, MatSidenavContainer, MatSidenavContent, MatNavList, MatListItem, MatListItemTitle, RouterLink, TitleCasePipe],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid implements OnInit{
 
  constructor() {
    //change the category in the store to trigger the computed property
    //will listen the signal updates
    this.store.setCategory(this.category);
    
   }


  public store = inject(EcommerceStore);
 
  //uses withComponentInputBinding() to access the route params
  public categories = signal<string[]>(['all', 'electronics', 'home', 'clothes', 'accessories']);
  public category = input<string>('all');
  
  public addToCart(product: Product) {
    console.log(product);
  }

  
  
  ngOnInit(): void {
      console.log(this.store);
  }
}
