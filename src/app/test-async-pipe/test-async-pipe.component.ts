import { Component } from '@angular/core';
import { take, interval } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-test-async-pipe',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './test-async-pipe.component.html',
  styleUrl: './test-async-pipe.component.scss',
})
export class TestAsyncPipeComponent extends BaseComponent {
  override name = 'test-async-pipe';

  interval = interval(1000).pipe(take(5));
}
