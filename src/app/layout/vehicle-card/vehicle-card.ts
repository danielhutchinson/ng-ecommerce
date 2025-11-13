import { Component, input } from '@angular/core';
import { VehicleGroup } from '../../types/vehicle';

@Component({
  selector: 'app-vehicle-card',
  imports: [],
  template: `
    <h3 class="text-lg text-bold">{{ vehicle().specification.model }}</h3>
    <h4 class="text-md mb-4">{{ vehicle().specification.derivative }}</h4>
  `,
  styles: ``,
})
export class VehicleCard {
  vehicle = input.required<VehicleGroup>();
}
