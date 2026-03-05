import { Component, inject } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon} from '@angular/material/icon';
import { RouterLink } from "@angular/router";
import { MatBadge } from '@angular/material/badge';
import { EcommerceStore } from '../../ecommerce-store';
import { User } from '../../models/user';
import { MatMenuTrigger, MatMenu } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';
import { SignInDialog } from '../../components/sign-in-dialog/sign-in-dialog';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { SignUpDialog } from '../../components/sign-up-dialog/sign-up-dialog';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, MatButton, MatIconButton, MatIcon, RouterLink, MatBadge, MatMenuTrigger, MatMenu, MatDivider],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  public store = inject(EcommerceStore);
  public matDialog = inject(MatDialog);
 
  public openSignInDialog() {
    this.matDialog.closeAll();
    this.matDialog.open(SignInDialog, {
      disableClose: true,
      data: {
        checkout: false
      }
    })
  }

  public openSignUpDialog() {
    this.matDialog.closeAll();
    this.matDialog.open(SignUpDialog, {
      disableClose: true,
      data: {
        checkout: false
      }
    })
  }

}
