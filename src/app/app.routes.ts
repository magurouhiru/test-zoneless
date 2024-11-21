import { Routes } from '@angular/router';
import { TestClickEventAndObservableNextComponent } from './test-click-event-and-observable-next/test-click-event-and-observable-next.component';
import { TestAsyncPipeComponent } from './test-async-pipe/test-async-pipe.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'test-click-event-and-observable-next',
    component: TestClickEventAndObservableNextComponent,
  },
  {
    path: 'test-async-pipe',
    component: TestAsyncPipeComponent,
  },
];
