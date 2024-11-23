import { Component } from '@angular/core';
import { NgForOf, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { take, interval } from 'rxjs';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-no-signal',
  standalone: true,
  imports: [NgForOf, NgIf, NgSwitchCase, NgSwitch],
  templateUrl: './no-signal.component.html',
  styleUrl: './no-signal.component.scss',
})
export class NoSignalComponent extends BaseComponent {
  override name = 'no-signal';

  interval = interval(1000).pipe(take(5));

  // no-signal
  value = 0;
  flag = true;
  array: number[] = [];
  array_str = '';

  constructor() {
    super();
    this.interval.subscribe({
      next: (v) => {
        this.value = v;
        this.flag = v % 2 === 0;
        const array = [];
        for (let i = 0; i < v; i++) array.push(i);
        this.array = array;
        this.array_str = JSON.stringify(this.array);
      },
      error: console.error,
      complete: () => console.log('complete'),
    });
  }
}
