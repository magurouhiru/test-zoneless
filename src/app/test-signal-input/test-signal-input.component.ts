import { Component } from '@angular/core';
import { NoSignalParentComponent } from './no-signal-parent/no-signal-parent.component';
import { SignalParentComponent } from './signal-parent/signal-parent.component';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-test-signal-input',
  standalone: true,
  imports: [NoSignalParentComponent, SignalParentComponent],
  templateUrl: './test-signal-input.component.html',
  styleUrl: './test-signal-input.component.scss',
})
export class TestSignalInputComponent extends BaseComponent {
  override name = 'test-signal-input';

  // 変更検知発火用のクリックイベント
  click() {}
}
