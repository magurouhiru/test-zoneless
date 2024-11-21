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
import { NgForOf, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { take, interval } from 'rxjs';
import { CntService } from '../../cnt.service';

@Component({
  selector: 'app-no-signal',
  standalone: true,
  imports: [NgForOf, NgIf, NgSwitchCase, NgSwitch],
  templateUrl: './no-signal.component.html',
  styleUrl: './no-signal.component.scss',
})
export class NoSignalComponent
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
  name = 'no-signal';
  label = '';

  interval = interval(1000).pipe(take(5));

  // no-signal
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
