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
import { Signal01Component } from './signal-01/signal-01.component';
import { NoSignal01Component } from './no-signal-01/no-signal-01.component';
import { CntService } from '../cnt.service';

@Component({
  selector: 'app-display-all',
  standalone: true,
  imports: [Signal01Component, NoSignal01Component],
  templateUrl: './test-click-event-and-observable-next.component.html',
  styleUrl: './test-click-event-and-observable-next.component.scss',
})
export class TestClickEventAndObservableNextComponent
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
  name = 'test-click-event-and-observable-next';
  label = '';

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
