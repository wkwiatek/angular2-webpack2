///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="./typings/webpack.d.ts" />

// local shims
import './ie-shims/ie-shims';

// polyfills
import 'es6-shim';
import 'es6-promise';

// (these modules are what is in 'angular2/bundles/angular2-polyfills' so don't use that here)
import 'reflect-metadata';

import 'zone.js/dist/zone-node';

if (WEBPACK_ENV !== 'production') {
  require('zone.js/dist/long-stack-trace-zone');
}

// Angular 2 Deps
import 'rxjs/Rx';
