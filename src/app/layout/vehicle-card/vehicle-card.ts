import { Component, input } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { VehicleGroup } from '../../types/vehicle';

@Component({
  selector: 'app-vehicle-card',
  imports: [MatCard, MatCardContent, MatCardHeader, MatCardTitle],
  template: `
    <mat-card class="max-w-sm mb-6">
      <div class="overflow-hidden">
        <img
          src="/img/car_6.png"
          [alt]="vehicle().specification.manufacturer + ' ' + vehicle().specification.model"
          class="w-full h-full object-cover"
        />
      </div>

      <mat-card-header>
        <mat-card-title>
          {{ vehicle().specification.manufacturer }} {{ vehicle().specification.model }}
        </mat-card-title>
      </mat-card-header>

      <mat-card-content>
        <h3 class="text-xs text-gray-400">
          {{ vehicle().specification.derivative }}
        </h3>
      </mat-card-content>
    </mat-card>
  `,
  styles: ``,
})
export class VehicleCard {
  vehicle = input.required<VehicleGroup>();
}
