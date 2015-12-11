import {it, describe, expect, inject, beforeEachProviders, TestComponentBuilder} from 'angular2/testing';
import {Type, provide} from 'angular2/angular2';
import {Location, Router, RouteRegistry, ROUTER_PROVIDERS, ROUTER_PRIMARY_COMPONENT } from 'angular2/router';
import {RootRouter} from 'angular2/src/router/router';

import {SpyLocation} from 'angular2/src/mock/location_mock';

import {App} from './app';

require('angular2/src/platform/browser_common').initDomAdapter();

describe('App', () => {

  // unit tests which uses Router: https://github.com/mgechev/angular2-seed/blob/master/app/components/app/app_spec.ts#L30
  beforeEachProviders(() => [
    RouteRegistry,
    provide(Location, {useClass: SpyLocation}),
    provide(ROUTER_PRIMARY_COMPONENT, {useValue: App}),
    provide(Router, {useClass: RootRouter})
  ]);

  it('should be able to test', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb.createAsync(App).then((componentFixture) => {
      componentFixture.detectChanges();
    });
  }));

});
