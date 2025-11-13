import { Component, input } from '@angular/core';
import { MatCard, MatCardTitle } from '@angular/material/card';
import { VehicleGroup } from '../../types/vehicle';

@Component({
  selector: 'app-vehicle-card',
  imports: [MatCard, MatCardTitle],
  template: `
    <mat-card class="h-80 w-full max-w-sm flex flex-col">
      <!-- Fixed height image container -->
      <div class="h-48 overflow-hidden bg-gray-200 flex-shrink-0">
        <img
          src="/img/car_6.png"
          [alt]="vehicle().specification.manufacturer + ' ' + vehicle().specification.model"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Fixed height content area -->
      <div class="flex flex-col flex-grow p-4 justify-between">
        <div>
          <mat-card-title class="text-lg font-bold mb-2 line-clamp-2">
            {{ vehicle().specification.manufacturer }} {{ vehicle().specification.model }}
          </mat-card-title>

          <h3 class="text-sm text-gray-600 line-clamp-2">
            {{ vehicle().specification.derivative }}
          </h3>
        </div>
      </div>
    </mat-card>
  `,
  styles: ``,
})
export class VehicleCard {
  vehicle = input.required<VehicleGroup>();
}
