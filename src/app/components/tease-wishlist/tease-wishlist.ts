import { Component, inject } from '@angular/core';
import { ViewPanel } from "../../directives/view-panel";
import { MatIcon } from '@angular/material/icon';
import { EcommerceStore } from '../../ecommerce-store';
import { MatAnchor } from "@angular/material/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-tease-wishlist',
  imports: [ViewPanel, MatIcon, MatAnchor, RouterLink],
  templateUrl: './tease-wishlist.html',
  styleUrl: './tease-wishlist.scss',
})
export class TeaseWishlist {

  store = inject(EcommerceStore);

}
