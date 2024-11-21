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
import { toSignal } from '@angular/core/rxjs-interop';
import { take, interval } from 'rxjs';
import { CntService } from '../../cnt.service';
import { NgForOf, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [NgForOf, NgIf, NgSwitchCase, NgSwitch],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
})
export class SignalComponent
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
  name = 'signal';
  label = '';

  interval = interval(1000).pipe(take(5));

  // signal
  value = toSignal(this.interval, { initialValue: NaN });
  flag = computed(() => this.value() % 2 === 0);
  array = computed(() => {
    const array = [];
    for (let i = 0; i < this.value(); i++) array.push(i);
    return array;
  });
  array_str = computed(() => JSON.stringify(this.array()));

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
