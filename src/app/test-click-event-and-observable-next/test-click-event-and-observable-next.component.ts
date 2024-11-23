import { Component } from '@angular/core';
import { Signal01Component } from './signal-01/signal-01.component';
import { NoSignal01Component } from './no-signal-01/no-signal-01.component';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-display-all',
  standalone: true,
  imports: [Signal01Component, NoSignal01Component],
  templateUrl: './test-click-event-and-observable-next.component.html',
  styleUrl: './test-click-event-and-observable-next.component.scss',
})
export class TestClickEventAndObservableNextComponent extends BaseComponent {
  override name = 'test-click-event-and-observable-next';
}
