import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CntService } from '../../cnt.service';
import { interval, take } from 'rxjs';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-no-signal-base',
  standalone: true,
  imports: [],
  templateUrl: './no-signal-base.component.html',
  styleUrl: './no-signal-base.component.scss',
})
export class NoSignalBaseComponent extends BaseComponent {
  override name = 'no-signal-base';
  // インプット
  @Input() parentName = '';

  flag = true;
  changeFlag() {
    this.flag = !this.flag;
  }

  interval = interval(1000).pipe(take(5));
  value = 0;
  constructor() {
    super();
    this.interval.subscribe({
      next: (v) => {
        this.value = v;
      },
      error: console.error,
      complete: () => console.log('complete'),
    });
  }

  // ライフサイクル監視
  override setLabel() {
    this.label = this.name + ':' + this.parentName;
  }
}
