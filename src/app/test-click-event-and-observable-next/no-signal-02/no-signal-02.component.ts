import { Component } from '@angular/core';
import { NoSignalBaseComponent } from '../no-signal-base/no-signal-base.component';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-no-signal-02',
  standalone: true,
  imports: [NoSignalBaseComponent],
  templateUrl: './no-signal-02.component.html',
  styleUrl: './no-signal-02.component.scss',
})
export class NoSignal02Component extends BaseComponent {
  override name = 'no-signal-02';
}
