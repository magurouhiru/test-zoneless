import { Component } from '@angular/core';
import { SignalBaseComponent } from '../signal-base/signal-base.component';

@Component({
  selector: 'app-signal-02',
  standalone: true,
  imports: [SignalBaseComponent],
  templateUrl: './signal-02.component.html',
  styleUrl: './signal-02.component.scss',
})
export class Signal02Component {
  name = 'signal-02';
}
