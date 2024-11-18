import { Component } from '@angular/core';
import { NoSignalBaseComponent } from '../no-signal-base/no-signal-base.component';

@Component({
  selector: 'app-no-signal-01',
  standalone: true,
  imports: [NoSignalBaseComponent],
  templateUrl: './no-signal-01.component.html',
  styleUrl: './no-signal-01.component.scss',
})
export class NoSignal01Component {
  title = 'no-signal-01';
}
