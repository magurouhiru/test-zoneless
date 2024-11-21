import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  computed,
  DoCheck,
  inject,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CntService } from '../cnt.service';
import { take, interval } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgForOf, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-test-control-flow-syntax',
  standalone: true,
  imports: [NgIf, NgSwitch, NgSwitchCase, NgForOf],
  templateUrl: './test-control-flow-syntax.component.html',
  styleUrl: './test-control-flow-syntax.component.scss',
})
export class TestControlFlowSyntaxComponent
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
  name = 'test-control-flow-syntax';
  label = '';

  // no-signal
  interval = interval(1000).pipe(take(5));
  value = 0;
  flag = true;
  array: number[] = [];
  array_str = '';

  constructor() {
    this.interval.subscribe({
      next: (v) => {
        this.value = v;
        this.flag = v % 2 === 0;
        const array = [];
        for (let i = 0; i < v; i++) array.push(i);
        this.array = array;
        this.array_str = JSON.stringify(this.array);
      },
      error: console.error,
      complete: () => console.log('complete'),
    });
  }

  // signal
  value_signal = toSignal(this.interval, { initialValue: NaN });
  flag_signal = computed(() => this.value_signal() % 2 === 0);
  array_signal = computed(() => {
    const array = [];
    for (let i = 0; i < this.value_signal(); i++) array.push(i);
    return array;
  });
  array_str_signal = computed(() => JSON.stringify(this.array_signal()));

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
