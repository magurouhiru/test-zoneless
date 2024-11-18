import { Routes } from '@angular/router';
import { CheckEventObservableComponent } from './check-event-observable/check-event-observable.component';

export const routes: Routes = [
  {
    path: '',
    component: CheckEventObservableComponent,
  },
  {
    path: 'check-event-async',
    component: CheckEventObservableComponent,
  },
];
