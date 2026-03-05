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
import { SignInDialog } from '../sign-in-dialog/sign-in-dialog';

@Component({
  selector: 'app-sign-up-dialog',
  imports: [MatIconButton, MatIcon, MatFormField, MatPrefix, MatSuffix, MatDialogClose, MatButton, MatInput, ReactiveFormsModule],
  templateUrl: './sign-up-dialog.html',
  styleUrl: './sign-up-dialog.scss',
})
export class SignUpDialog {

  public store = inject(EcommerceStore);
  public setPasswordVisible = signal(false);
  public setPasswordVisible2 = signal(false);
  public matDialog = inject(MatDialog);

  data = inject<{checkout: boolean}>(MAT_DIALOG_DATA);

  public fb = inject(NonNullableFormBuilder);
  signUpForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });


  public onSubmit() {
    console.log(this.signUpForm.value);
    if(!this.signUpForm.valid) { 
      this.signUpForm.markAllAsTouched();
      return;
    }
    this.store.signUp(this.signUpForm.value as SignUpParams);
  }

   public openSignInDialog() {
    this.matDialog.closeAll();
    this.matDialog.open(SignInDialog, {
      disableClose: true,
      data: {
        checkout: this.data.checkout
      }
    })
  }

}
