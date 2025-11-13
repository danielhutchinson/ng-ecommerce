import { Component } from '@angular/core';

@Component({
  selector: 'app-search-banner',
  imports: [],
  template: `
    <header
      class="w-full cover-image"
      role="banner"
      aria-label="Vehicle search page banner with background image"
    >
      <div class="container mx-auto py-4 h-full flex items-center">
        <div>
          <h1 class="text-3xl font-bold text-white drop-shadow-lg mb-1" aria-level="1">
            Find your next vehicle
          </h1>
          <p class="text-lg text-white leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </header>
  `,
  styles: `
    .cover-image {
      background-image: 
        linear-gradient(to top, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%),
        url('/img/searchpage_banner.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      height: 300px;
      position: relative;
    }
  `,
})
export class SearchBanner {}
