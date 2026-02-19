import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product';
import { MatAnchor } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-product-card',
  imports: [MatAnchor, MatIcon, MatButton],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {

  public product = input.required<Product>();
  //example of output signal event
  public addToCartEvent = output<Product>();
 
}
