import { Component } from '@angular/core';
import { take, interval } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { SignalChildComponent } from '../signal-child/signal-child.component';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-signal-parent',
  standalone: true,
  imports: [SignalChildComponent],
  templateUrl: './signal-parent.component.html',
  styleUrl: './signal-parent.component.scss',
})
export class SignalParentComponent extends BaseComponent {
  override name = 'signal-parent';

  interval = interval(1000).pipe(take(5));
  value = toSignal(this.interval, { initialValue: NaN });
}
