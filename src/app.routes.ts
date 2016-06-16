import { RouterConfig } from '@angular/router';
import { TestComponent } from './components/test.component';

export const AppRoutes: RouterConfig = [
  { index: true, component: TestComponent },
  { path: 'test', component: TestComponent }
];
