import { enableProdMode } from '@angular/core';

if (WEBPACK_ENV === 'production') {
  enableProdMode();
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { TestComponent } from './components/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
