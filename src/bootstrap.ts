import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import './ie-shims/ie-shims';

import {App} from './app';

bootstrap(App, [ROUTER_PROVIDERS]);