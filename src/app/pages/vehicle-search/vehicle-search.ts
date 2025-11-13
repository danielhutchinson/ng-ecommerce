import { Component, inject, signal, Signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { SearchBanner } from './search-banner';
import { VehicleGroup } from '../../types/vehicle';
import { VehicleService } from '../../services/vehicle';
import { StorefrontStore } from '../../storefront-store';
import { VehicleCard } from '../../layout/vehicle-card/vehicle-card';
@Component({
  selector: 'app-vehicle-search',
  imports: [SearchBanner, JsonPipe, VehicleCard],
  template: `
    <app-search-banner></app-search-banner>

    <main class="container mx-auto py-4" role="main">
      <section aria-labelledby="content-heading">
        <h2 class="sr-only">Vehicle Search Results</h2>
        <p role="text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi vero reprehenderit libero
          rem quis provident velit omnis sed aperiam ducimus debitis soluta iusto odit a, quasi
          harum nisi tempora esse.
        </p>

        <section>
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
