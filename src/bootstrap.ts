/// <reference path="./typings/webpack.d.ts" />

// Polyfills
import 'es6-promise';
import 'es6-shim';
import 'reflect-metadata';
import 'zone.js';
import './ie-shims/ie-shims';

(<any>window).Zone = require('zone.js').Zone;

// Angular 2 Deps
import 'rxjs';

import {enableProdMode} from 'angular2/core';

if (NODE_ENV === 'production') {
  enableProdMode();
}

import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {App} from './app';

bootstrap(App, [ROUTER_PROVIDERS]);
