import { Component, inject } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon} from '@angular/material/icon';
import { RouterLink } from "@angular/router";
import { MatBadge } from '@angular/material/badge';
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, MatButton, MatIconButton, MatIcon, RouterLink, MatBadge],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  public store = inject(EcommerceStore);

}
