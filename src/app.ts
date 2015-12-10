import {Component} from 'angular2/angular2';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {TestComponent} from './components/test';

@Component({
  selector: 'app',
  template: '<router-outlet></router-outlet>',
  directives: [RouterOutlet]
})
export class App {}