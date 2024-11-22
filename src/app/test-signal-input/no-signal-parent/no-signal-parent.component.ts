import { Component } from '@angular/core';
import { take, interval } from 'rxjs';
import { NoSignalChildComponent } from '../no-signal-child/no-signal-child.component';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-no-signal-parent',
  standalone: true,
  imports: [NoSignalChildComponent],
  templateUrl: './no-signal-parent.component.html',
  styleUrl: './no-signal-parent.component.scss',
})
export class NoSignalParentComponent extends BaseComponent {
  override name = 'no-signal-parent';

  interval = interval(1000).pipe(take(5));
  value = 0;
  constructor() {
    super();
    this.interval.subscribe({
      next: (v) => (this.value = v),
      error: console.error,
      complete: () => console.log('complete'),
    });
  }
}
