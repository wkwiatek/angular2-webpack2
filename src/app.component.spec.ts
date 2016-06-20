import {
  beforeEachProviders,
  describe,
  expect,
  inject,
  it,
} from '@angular/core/testing';
import {
  TestComponentBuilder,
} from '@angular/compiler/testing';
import { ROUTER_FAKE_PROVIDERS } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { setBaseTestProviders } from '@angular/core/testing';
import {
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS,
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
} from '@angular/platform-browser-dynamic/testing';

setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

describe('App', () => {

  // TODO: change router to v3
  beforeEachProviders(() => [ROUTER_FAKE_PROVIDERS])

  it('should be able to test', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(AppComponent).then(componentFixture => {
      componentFixture.detectChanges();
      expect(true).toBe(true);
    });
  }));

});
