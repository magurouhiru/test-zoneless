import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-no-signal-child',
  standalone: true,
  imports: [],
  templateUrl: './no-signal-child.component.html',
  styleUrl: './no-signal-child.component.scss',
})
export class NoSignalChildComponent extends BaseComponent {
  override name = 'no-signal-child';

  @Input() inputValue = 0;
  @Input({ required: true }) inputValueRequired = 0;
}
