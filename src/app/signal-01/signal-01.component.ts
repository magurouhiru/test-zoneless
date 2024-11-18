import { Component } from '@angular/core';
import { SignalBaseComponent } from '../signal-base/signal-base.component';

@Component({
  selector: 'app-signal-01',
  standalone: true,
  imports: [SignalBaseComponent],
  templateUrl: './signal-01.component.html',
  styleUrl: './signal-01.component.scss',
})
export class Signal01Component {
  title = 'signal-01';
}
