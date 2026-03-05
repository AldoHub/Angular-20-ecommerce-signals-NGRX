import { Component, inject, signal } from '@angular/core';
import { MatIconButton, MatButton } from "@angular/material/button";
import { MatIcon } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { NonNullableFormBuilder, Validators, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatPrefix, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { EcommerceStore } from '../../ecommerce-store';
import { SignUpParams } from '../../models/user';
import { MatDialog } from '@angular/material/dialog';
import { SignUpDialog } from '../sign-up-dialog/sign-up-dialog';

@Component({
  selector: 'app-sign-in-dialog',
  imports: [MatIconButton, MatIcon, MatFormField, MatPrefix, MatSuffix, MatDialogClose, MatButton, MatInput, ReactiveFormsModule],
  templateUrl: './sign-in-dialog.html',
  styleUrl: './sign-in-dialog.scss',
})
export class SignInDialog {

  public matDialog = inject(MatDialog);
  data = inject<{checkout: boolean}>(MAT_DIALOG_DATA);

  public store = inject(EcommerceStore);
  public setPasswordVisible = signal(false);
  
  
  public fb = inject(NonNullableFormBuilder);
  signInForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  public onSubmit() {
    console.log(this.signInForm.value);
    if(this.signInForm.valid) {

      const { email, password } = this.signInForm.value;
      this.store.signIn({email, password, checkout: this.data.checkout} as SignUpParams);

    }else{
      this.signInForm.markAllAsTouched();
      return;
    }
  }
  

  public openSignUpDialog() {
    this.matDialog.closeAll();
    this.matDialog.open(SignUpDialog, {
      disableClose: true,
      data: {
        checkout: this.data.checkout
      }
    })
  }
}
