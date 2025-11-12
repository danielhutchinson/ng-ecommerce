import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header-actions',
  imports: [MatIconButton, MatIcon],
  template: `
    <div class="flex items-center gap-6">
      <div class="flex flex-col items-center">
        <button matIconButton aria-label="Shortlist"><mat-icon>favorite</mat-icon></button>
        <span class="text-xs text-gray-600 font-bold">Shortlist</span>
      </div>

      <div class="flex flex-col items-center">
        <button matIconButton aria-label="Profile"><mat-icon>person</mat-icon></button>
        <span class="text-xs text-gray-600 font-bold">Profile</span>
      </div>
    </div>
  `,
  styles: ``,
})
export class HeaderActions {}
