import { Component, ViewEncapsulation } from '@angular/core';
import { trigger, transition } from '@angular/animations';
import { fadeAnimation, slideAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('routerAnimations', [
      transition('* => *', slideAnimation)
    ])
  ]
})
export class AppComponent {
  title = 'SVG Experiments';
  links: Array<
    { 
      text: string, 
      path: string 
    }
  > = [];

  prepareRouteTransition(outlet) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }
}
