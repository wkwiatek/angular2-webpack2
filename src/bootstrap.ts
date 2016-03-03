import {enableProdMode} from 'angular2/core';

if (WEBPACK_ENV === 'production') {
  enableProdMode();
}

import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {App} from './app';

bootstrap(App, [ROUTER_PROVIDERS]);
