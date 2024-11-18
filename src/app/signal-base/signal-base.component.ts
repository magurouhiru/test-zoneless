import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  inject,
  input,
  OnChanges,
  OnDestroy,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';
import { CntService } from '../cnt.service';
import { NgIf } from '@angular/common';
import { interval, take } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-signal-base',
  standalone: true,
  imports: [NgIf],
  templateUrl: './signal-base.component.html',
  styleUrl: './signal-base.component.scss',
})
export class SignalBaseComponent
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
  cntService = inject(CntService);
  // インプット
  title = input.required<string>();

  flag = signal(true);
  changeFlag() {
    this.flag.update((v) => !v);
  }

  interval = interval(1000).pipe(take(5));
  v = toSignal(this.interval);

  // ライフサイクル監視
  ngOnChanges(changes: SimpleChanges) {}
  ngOnInit() {
    this.cntService.setData(this.title());
    this.cntService.addOnInit(this.title());
  }
  ngDoCheck() {
    this.cntService.addDoCheck(this.title());
  }
  ngAfterContentInit() {
    this.cntService.addAfterContentInit(this.title());
  }
  ngAfterContentChecked() {
    this.cntService.addAfterContentChecked(this.title());
  }
  ngAfterViewInit() {
    this.cntService.addAfterViewInit(this.title());
  }
  ngAfterViewChecked() {
    this.cntService.addAfterViewChecked(this.title());
  }
  ngOnDestroy() {
    this.cntService.addOnDestroy(this.title());
  }
}
