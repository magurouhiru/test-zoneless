import { Component } from '@angular/core';
import { NoSignalBaseComponent } from '../no-signal-base/no-signal-base.component';
import { NoSignal02Component } from '../no-signal-02/no-signal-02.component';

@Component({
  selector: 'app-no-signal-01',
  standalone: true,
  imports: [NoSignalBaseComponent, NoSignal02Component],
  templateUrl: './no-signal-01.component.html',
  styleUrl: './no-signal-01.component.scss',
})
export class NoSignal01Component {
  name = 'no-signal-01';
}
