import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  inject,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { take, interval } from 'rxjs';
import { CntService } from '../../cnt.service';
import { NoSignalChildComponent } from '../no-signal-child/no-signal-child.component';

@Component({
  selector: 'app-no-signal-parent',
  standalone: true,
  imports: [NoSignalChildComponent],
  templateUrl: './no-signal-parent.component.html',
  styleUrl: './no-signal-parent.component.scss',
})
export class NoSignalParentComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  name = 'no-signal-parent';
  label = '';

  interval = interval(1000).pipe(take(5));
  value = 0;
  constructor() {
    this.interval.subscribe({
      next: (v) => (this.value = v),
      error: console.error,
      complete: () => console.log('complete'),
    });
  }

  // ライフサイクル監視
  cntService = inject(CntService);
  ngOnChanges(changes: SimpleChanges) {}
  ngOnInit() {
    this.label = this.name;
    this.cntService.setData(this.label);
    this.cntService.addOnInit(this.label);
  }
  ngDoCheck() {
    this.cntService.addDoCheck(this.label);
  }
  ngAfterContentInit() {
    this.cntService.addAfterContentInit(this.label);
  }
  ngAfterContentChecked() {
    this.cntService.addAfterContentChecked(this.label);
  }
  ngAfterViewInit() {
    this.cntService.addAfterViewInit(this.label);
  }
  ngAfterViewChecked() {
    this.cntService.addAfterViewChecked(this.label);
  }
  ngOnDestroy() {
    this.cntService.addOnDestroy(this.label);
  }
}
