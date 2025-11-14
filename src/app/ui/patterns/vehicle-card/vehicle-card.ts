import { Component, input } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { VehicleGroup } from '../../../types/vehicle';

@Component({
  selector: 'app-vehicle-card',
  imports: [MatCard, CurrencyPipe, DatePipe],
  template: `
    <mat-card class="h-full w-full flex flex-col">
      <div class="h-48 flex-shrink-0 rounded-t-xl">
        <img
          src="/img/car_6.png"
          [alt]="vehicle().specification.manufacturer + ' ' + vehicle().specification.model"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="flex flex-col p-4 flex-grow">
        <div class="h-15 flex flex-col">
          <div>
            <h3 class="text-lg font-bold line-clamp-2 leading-tight">
              {{ vehicle().specification.model }}
            </h3>
          </div>

          <div class="flex-grow">
            <h3 class="text-sm text-gray-500 line-clamp-2">
              {{ vehicle().specification.derivative }}
            </h3>
          </div>
        </div>

        <div class="h-full my-2 flex items-center">
          <p class="flex gap-3 text-sm truncate">
            <span>{{ vehicle().specification.transmission }}</span>
            <span>{{ vehicle().specification.fuelType }}</span>
            <span>2.0l</span>
          </p>
        </div>

        <div>
          <p class="text-lg font-bold mb-3 truncate mb-2">
            {{ vehicle().physical.onTheRoadPrice | currency : 'GBP' : 'symbol' : '1.0-0' }}
          </p>

          <div class="text-gray-400">
            <hr class="my-2" />
            <p class="text-gray-800 flex gap-3 text-xs truncate">
              <span>{{
                vehicle().registrationInformation.dateOfFirstRegistration | date : 'yyyy'
              }}</span>
              <span>{{ vehicle().physical.mileage }} miles</span>
              <span>{{ vehicle().specification.color }}</span>
            </p>
          </div>
        </div>
      </div>
    </mat-card>
  `,
  styles: `
    mat-card {
      transition: transform 0.2s ease-in-out, box-shadow 0.1s ease-in-out;
    }

    mat-card:hover {
      transform: scale(1.01);
      box-shadow: var(--mat-sys-level2);
      cursor: pointer;
    }
  `,
})
export class VehicleCard {
  vehicle = input.required<VehicleGroup>();
}
