import { Component } from '@angular/core';
import { MatListItem, MatNavList } from '@angular/material/list';

@Component({
  selector: 'app-search-filters',
  imports: [MatNavList, MatListItem],
  template: `
    <mat-nav-list class="pt-0">
      <a mat-list-item>
        <span matListItemTitle>Price Range</span>
      </a>

      <a mat-list-item>
        <span matListItemTitle>Vehicle Type</span>
      </a>

      <a mat-list-item>
        <span matListItemTitle>Fuel Type</span>
      </a>

      <a mat-list-item>
        <span matListItemTitle>Mileage</span>
      </a>
    </mat-nav-list>
  `,
  styles: ``,
})
export class SearchFilters {}
