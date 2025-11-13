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
      <section aria-labelledby="content-heading">
        <h2 class="sr-only">Vehicle Search Results</h2>

        <!-- Vehicle Cards Grid -->
        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          @for (vehicle of vehicles(); track vehicle.vehicleId) {
          <app-vehicle-card [vehicle]="vehicle"></app-vehicle-card>
          }
        </section>
      </section>
    </main>
  `,
  styles: ``,
})
export class VehicleSearch {
  store = inject(StorefrontStore);
  vehicles = this.store.vehicles;
}
