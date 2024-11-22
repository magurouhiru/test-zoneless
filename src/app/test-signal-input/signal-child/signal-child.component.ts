import { Component, input } from '@angular/core';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-signal-child',
  standalone: true,
  imports: [],
  templateUrl: './signal-child.component.html',
  styleUrl: './signal-child.component.scss',
})
export class SignalChildComponent extends BaseComponent {
  override name = 'signal-child';

  inputValue = input<number>();
  inputValueRequired = input.required<number>();
}
