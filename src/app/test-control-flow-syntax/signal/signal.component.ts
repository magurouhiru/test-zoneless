import { Component, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { take, interval } from 'rxjs';
import { NgForOf, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [NgForOf, NgIf, NgSwitchCase, NgSwitch],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
})
export class SignalComponent extends BaseComponent {
  override name = 'signal';

  interval = interval(1000).pipe(take(5));

  // signal
  value = toSignal(this.interval, { initialValue: NaN });
  flag = computed(() => this.value() % 2 === 0);
  array = computed(() => {
    const array = [];
    for (let i = 0; i < this.value(); i++) array.push(i);
    return array;
  });
  array_str = computed(() => JSON.stringify(this.array()));
}
