import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { HeaderActions } from './header-actions';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, HeaderActions],
  template: `
    <mat-toolbar class="drop-shadow-lg z-5" role="banner" aria-label="Main navigation header">
      <div class="container mx-auto flex justify-between items-center">
        <div class="brand-container">
          <a
            href="/"
            class="brand-link text-inherit no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
            aria-label="Storefront - Go to homepage"
            role="link"
          >
            <span class="text-lg font-medium" aria-hidden="false">Storefront</span>
          </a>
        </div>

        <app-header-actions></app-header-actions>
      </div>
    </mat-toolbar>
  `,
  styles: `
    .brand-link:focus {
      outline: 2px solid #3b82f6;
      outline-offset: 2px;
    }
    
    .text-inherit {
      color: inherit;
    }
    
    .no-underline {
      text-decoration: none;
    }
    
    .focus\\:outline-none:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
    
    .focus\\:ring-2:focus {
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
    }
    
    .focus\\:ring-offset-2:focus {
      box-shadow: 0 0 0 2px white, 0 0 0 4px rgba(59, 130, 246, 0.5);
    }
    
    .rounded {
      border-radius: 0.25rem;
    }
  `,
})
export class Header {}
