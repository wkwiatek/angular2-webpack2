/// <reference path="./typings/webpack.d.ts" />

// polyfills
import 'es6-shim';
import 'es6-promise';

// (these modules are what is in 'angular2/bundles/angular2-polyfills' so don't use that here)
import 'es7-reflect-metadata/dist/browser';

import 'zone.js/dist/zone-microtask';
import 'zone.js/dist/long-stack-trace-zone';

// Angular 2 Deps
import 'rxjs';

// local shims
import './ie-shims/ie-shims';
