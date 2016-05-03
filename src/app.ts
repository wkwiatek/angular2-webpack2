import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Route } from '@angular/router';

import { TestComponent } from './components/test';

@Component({
  selector: 'app',
  template: `
    <a [routerLink]="['/']" href="https://github.com/angular/angular/issues/8409"></a>
    <router-outlet></router-outlet>
  `,
  directives: ROUTER_DIRECTIVES
})
@Routes([
  { path: '/', component: TestComponent }
])
export class App {}
