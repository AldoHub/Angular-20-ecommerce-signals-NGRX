import { Component, inject } from '@angular/core';
import { BackButton } from '../../components/back-button/back-button';
import { CartSummary } from '../../components/cart-summary/cart-summary';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EcommerceStore } from '../../ecommerce-store';
import { ViewPanel } from '../../directives/view-panel'; '../../directives/view-panel';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-checkout',
  imports: [BackButton, CartSummary, ReactiveFormsModule, ViewPanel, MatButton, MatIcon, MatFormField, MatInput],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
})
export class Checkout {

  store = inject(EcommerceStore);

   public fb = inject(NonNullableFormBuilder);
   shippingForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
    zip: ['', Validators.required],
  });


  public onSubmitShipping() {
    console.log(this.shippingForm.value);
  }


}
