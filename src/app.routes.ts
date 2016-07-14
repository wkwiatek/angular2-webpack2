import { RouterConfig } from '@angular/router';
import { TestComponent } from './components/test.component';

export const AppRoutes: RouterConfig = [
  { path: '', component: TestComponent },
  { path: 'test', component: TestComponent }
];
