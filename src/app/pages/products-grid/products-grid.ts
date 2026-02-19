import { Component, computed, input, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from '../../components/product-card/product-card';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatNavList, MatListItem, MatListItemTitle } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from "@angular/router";
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard, MatSidenav, MatSidenavContainer, MatSidenavContent, MatNavList, MatListItem, MatListItemTitle, RouterLink, TitleCasePipe],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {
  products = signal<Product[]>([
    {
      id: '1',
      name: 'Product 1',
      description: 'Product 1 description',
      price: 10,
      imageUrl: 'https://picsum.photos/200/300',
      rating: 4,
      reviewCount: 10,
      category: 'Electronics',
      inStock: true,
    },
    {
      id: '2',
      name: 'Product 2',
      description: 'Product 2 description',
      price: 20,
      imageUrl: 'https://picsum.photos/200/300',
      rating: 3,
      reviewCount: 5,
      category: 'Electronics',
      inStock: true,
    },
    {
      id: '3',
      name: 'Product 3',
      description: 'Product 3 description',
      price: 30,
      imageUrl: 'https://picsum.photos/200/300',
      rating: 5,
      reviewCount: 15,
      category: 'Electronics',
      inStock: false,
    },
    {
      id: '4',
      name: 'Product 4',
      description: 'Product 4 description',
      price: 40,
      imageUrl: 'https://picsum.photos/200/300',
      rating: 4,
      reviewCount: 20,
      category: 'Home',
      inStock: true,
    },
  ]);
  
  //uses withComponentInputBinding() to access the route params
  public categories = signal<string[]>(['all', 'electronics', 'home', 'clothes', 'accessories']);
  public category = input<string>('all');
  

  public filteredProducts = computed(() => {
    if (this.category() === 'all') {
      return this.products();
    } else{
      return this.products().filter(product => product.category.toLowerCase() === this.category().toLowerCase());
    }    
  });

  public addToCart(product: Product) {
    console.log(product);
  }

  public showCategory(category: string) {
    console.log(category);
  }
}
