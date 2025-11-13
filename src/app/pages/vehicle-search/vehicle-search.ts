import { Component, inject, signal, Signal } from '@angular/core';
import { MatNavList, MatListItem } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { SearchBanner } from './search-banner';
import { StorefrontStore } from '../../storefront-store';
import { VehicleCard } from '../../layout/vehicle-card/vehicle-card';
@Component({
  selector: 'app-vehicle-search',
  imports: [SearchBanner, VehicleCard, MatNavList, MatListItem, MatIcon],
  template: `
    <app-search-banner></app-search-banner>

    <main class="container mx-auto" role="main">
      <div class="flex flex-col lg:flex-row gap-6">
        <aside
          class="lg:w-1/6 w-full pr-4 border-r border-gray-300 rounded-md pt-12"
          role="complementary"
          aria-label="Filters and options"
        >
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
        </aside>

        <section class="lg:w-5/6 w-full pt-12" aria-labelledby="content-heading">
          <h2 class="sr-only">Vehicle Search Results</h2>

          <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12">
            @for (vehicle of vehicles(); track vehicle.vehicleId) {
            <app-vehicle-card [vehicle]="vehicle"></app-vehicle-card>
            }
          </div>
        </section>
      </div>
    </main>
  `,
  styles: ``,
})
export class VehicleSearch {
  store = inject(StorefrontStore);
  vehicles = this.store.vehicles;
}
