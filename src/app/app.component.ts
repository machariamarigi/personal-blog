import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerTransition } from '../animations';

@Component({
  selector: 'pb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {
  title = 'personal-blog';

  getOutlet(outlet: RouterOutlet) {
    return outlet.activatedRouteData.routeState;
  }
}
