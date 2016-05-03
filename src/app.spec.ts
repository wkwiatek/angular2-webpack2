import {
  beforeEachProviders,
  describe,
  expect,
  inject,
  it,
} from '@angular/core/testing';
import {
  ComponentFixture,
  TestComponentBuilder,
} from '@angular/compiler/testing';
import { ROUTER_FAKE_PROVIDERS } from '@angular/router/testing';
import { App } from './app';

import { setBaseTestProviders } from '@angular/core/testing';
import {
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS,
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
} from '@angular/platform-browser-dynamic/testing';

setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

describe('App', () => {

  // unit tests which uses Router: https://github.com/mgechev/angular2-seed/blob/master/app/components/app/app_spec.ts#L30
  beforeEachProviders(() => [ROUTER_FAKE_PROVIDERS])

  it('should be able to test', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(App).then((componentFixture: ComponentFixture) => {
      componentFixture.detectChanges();
      expect(true).toBe(true);
    });
  }));

});
