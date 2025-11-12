import { Component } from '@angular/core';
import { SearchBanner } from './search-banner';

@Component({
  selector: 'app-vehicle-search',
  imports: [SearchBanner],
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
      </section>
    </main>
  `,
  styles: ``,
})
export class VehicleSearch {}
