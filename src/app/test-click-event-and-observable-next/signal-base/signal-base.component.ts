import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  computed,
  DoCheck,
  inject,
  input,
  OnChanges,
  OnDestroy,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';
import { CntService } from '../../cnt.service';
import { interval, take } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-signal-base',
  standalone: true,
  imports: [],
  templateUrl: './signal-base.component.html',
  styleUrl: './signal-base.component.scss',
})
export class SignalBaseComponent extends BaseComponent {
  override name = 'signal-base';
  // インプット
  parentName = input.required<string>();

  flag = signal(true);
  changeFlag() {
    this.flag.update((v) => !v);
  }

  interval = interval(1000).pipe(take(5));
  value = toSignal(this.interval);

  // ライフサイクル監視
  override setLabel() {
    this.label = this.name + ':' + this.parentName();
  }
}
