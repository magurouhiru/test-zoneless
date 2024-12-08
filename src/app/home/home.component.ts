import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent extends BaseComponent {
  override name = 'home';
  links: { link: string; label: string }[] = [
    {
      link: 'test-click-event-and-observable-next',
      label: 'test-click-event-and-observable-next',
    },
    { link: 'test-async-pipe', label: 'test-async-pipe' },
    { link: 'test-control-flow-syntax', label: 'test-control-flow-syntax' },
    { link: 'test-signal-input', label: 'test-signal-input' },
  ];
}
