import {enableProdMode} from 'angular2/core';

if (NODE_ENV === 'production') {
  enableProdMode();
}

import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {App} from './app';
import {Store} from './store/Store'

bootstrap(App, [
  ROUTER_PROVIDERS,
  Store
]);
