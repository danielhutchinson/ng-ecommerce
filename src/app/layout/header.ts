import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { HeaderActions } from './header-actions';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, HeaderActions],
  template: `
    <mat-toolbar class="drop-shadow-lg z-5">
      <div class="container mx-auto flex justify-between items-center">
        <span>Storefront</span>
        <app-header-actions></app-header-actions>
      </div>
    </mat-toolbar>
  `,
  styles: ``,
})
export class Header {}
