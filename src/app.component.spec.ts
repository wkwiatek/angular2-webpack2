import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { async, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe('App', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterModule.forRoot([])
      ]
    });
  });

  it('should be able to test', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.whenStable().then(() => {
      expect(true).toEqual(true);
    });
  }));

});
