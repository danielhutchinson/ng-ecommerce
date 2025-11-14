import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './ui/patterns/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: `
    <app-header></app-header>
    <router-outlet />
    <footer
      class="container mx-auto py-20 text-center"
      role="contentinfo"
      aria-label="Footer information"
    >
      <p class="mb-10 text-gray-400 leading-relaxed">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem inventore soluta eum
        obcaecati aspernatur amet consectetur magni, velit perferendis libero error nemo vitae
        provident atque, nesciunt minus quis harum.
      </p>
      <a href="#">Cookie shit</a> |
      <a href="#">Back to top</a>
    </footer>
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('ng-ecommerce');
}
