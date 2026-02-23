import { Component, inject, input, output, computed } from '@angular/core';
import { Product } from '../../models/product';
import { MatAnchor, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { MatButton } from "@angular/material/button";
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-product-card',
  imports: [MatAnchor, MatIcon, MatButton, MatIconButton],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {

  public store = inject(EcommerceStore);

  public product = input.required<Product>();
  //example of output signal event
  public addToCartEvent = output<Product>();
 

}
