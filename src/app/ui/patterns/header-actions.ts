import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header-actions',
  imports: [MatIconButton, MatIcon],
  template: `
    <nav
      class="flex items-center gap-6"
      role="navigation"
      aria-label="User account and shortlist actions"
    >
      <div class="action-item">
        <button
          matIconButton
          aria-label="View your shortlist of saved vehicles"
          aria-describedby="shortlist-description"
          class="focus-ring"
          type="button"
        >
          <mat-icon aria-hidden="true">favorite</mat-icon>
        </button>
        <span id="shortlist-description" class="text-xs text-gray-600 font-bold" role="text">
          Shortlist
        </span>
      </div>

      <div class="action-item">
        <button
          matIconButton
          aria-label="Access your profile and account settings"
          aria-describedby="profile-description"
          class="focus-ring"
          type="button"
        >
          <mat-icon aria-hidden="true">person</mat-icon>
        </button>
        <span id="profile-description" class="text-xs text-gray-600 font-bold" role="text">
          Profile
        </span>
      </div>
    </nav>
  `,
  styles: `
    .action-item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,
})
export class HeaderActions {}
