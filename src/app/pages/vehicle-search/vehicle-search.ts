import { Component, inject, signal, Signal } from '@angular/core';
import { SearchBanner } from './search-banner';
import { StorefrontStore } from '../../storefront-store';
import { VehicleCard } from '../../layout/vehicle-card/vehicle-card';
@Component({
  selector: 'app-vehicle-search',
  imports: [SearchBanner, VehicleCard],
  template: `
    <app-search-banner></app-search-banner>

    <main class="container mx-auto py-4" role="main">
      <div class="flex flex-col lg:flex-row gap-6">
        <aside class="lg:w-1/4 w-full" role="complementary" aria-label="Filters and options">
          <h3 class="text-lg font-semibold mb-4">Filters</h3>
          <p class="text-gray-600">Filter options will go here</p>
        </aside>

        <section class="lg:w-3/4 w-full" aria-labelledby="content-heading">
          <h2 class="sr-only">Vehicle Search Results</h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
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
