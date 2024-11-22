import { Component } from '@angular/core';
import { SignalComponent } from './signal/signal.component';
import { NoSignalComponent } from './no-signal/no-signal.component';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-test-control-flow-syntax',
  standalone: true,
  imports: [SignalComponent, NoSignalComponent],
  templateUrl: './test-control-flow-syntax.component.html',
  styleUrl: './test-control-flow-syntax.component.scss',
})
export class TestControlFlowSyntaxComponent extends BaseComponent {
  override name = 'test-control-flow-syntax';

  // 変更検知発火用のクリックイベント
  click() {}
}
