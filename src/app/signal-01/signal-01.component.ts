import { Component } from '@angular/core';
import { SignalBaseComponent } from '../signal-base/signal-base.component';
import { Signal02Component } from '../signal-02/signal-02.component';

@Component({
  selector: 'app-signal-01',
  standalone: true,
  imports: [SignalBaseComponent, Signal02Component],
  templateUrl: './signal-01.component.html',
  styleUrl: './signal-01.component.scss',
})
export class Signal01Component {
  title = 'signal-01';
}
