import { Component } from '@angular/core';
import { Signal01Component } from '../signal-01/signal-01.component';
import { NoSignal01Component } from '../no-signal-01/no-signal-01.component';

@Component({
  selector: 'app-display-all',
  standalone: true,
  imports: [Signal01Component, NoSignal01Component],
  templateUrl: './display-all.component.html',
  styleUrl: './display-all.component.scss',
})
export class DisplayAllComponent {}
