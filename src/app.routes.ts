import { Routes } from '@angular/router';
import { TestComponent } from './components/test.component';

export const AppRoutes: Routes = [
  { path: '', component: TestComponent },
  { path: 'test', component: TestComponent }
];
