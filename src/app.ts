import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {TodosComponent} from './components/TodosComponent';

@Component({
  selector: 'app',
  template: '<router-outlet></router-outlet>',
  directives: [RouterOutlet]
})
@RouteConfig([
  { path: '/', component: TodosComponent }
])
export class App {}
