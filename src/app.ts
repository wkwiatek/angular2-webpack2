import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {TestComponent} from './components/test';

@Component({
  selector: 'app',
  template: '<router-outlet></router-outlet>',
  directives: [RouterOutlet]
})
@RouteConfig([
  { path: '/', component: TestComponent }
])
export class App {}