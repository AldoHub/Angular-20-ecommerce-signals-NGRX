import { Component, input, output, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { EcommerceStore } from '../../ecommerce-store';


@Component({
  selector: 'app-qty-selector',
  imports: [MatIcon],
  templateUrl: './qty-selector.html',
  styleUrl: './qty-selector.scss',
})
export class QtySelector {

  public quantity = input<number>(0);
  qtyUpdated = output<number>();

  store = inject(EcommerceStore);

  public decreseQty() {
    if (this.quantity() > 1) {
      this.qtyUpdated.emit(this.quantity() - 1);
      
    }
  }

  public increaseQty() {
    this.qtyUpdated.emit(this.quantity() + 1);
    
  }
}
