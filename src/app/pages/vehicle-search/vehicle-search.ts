import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatFabButton, MatButton } from '@angular/material/button';

@Component({
  selector: 'app-vehicle-search',
  imports: [MatIcon, MatButton],
  template: `
    <div class="container mx-auto py-4">
      <h2 class="text-2xl mb-4">Vehicle Search</h2>
    </div>
  `,
  styles: ``,
})
export class VehicleSearch {}
