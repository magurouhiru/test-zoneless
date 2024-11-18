import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  effect,
  input,
  OnChanges,
  OnDestroy,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';
import { getCntObj } from '../if';

@Component({
  selector: 'app-signal-base',
  standalone: true,
  imports: [],
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
  // インプット
  title = input.required<string>();
  // ライフサイクル監視
  cntObj = signal(getCntObj());
  print = effect(() => {
    console.table(this.cntObj);
  });
  ngOnChanges(changes: SimpleChanges) {
    this.cntObj.update((v) => {
      v.cntOnChanges++;
      return { ...v };
    });
  }
  ngOnInit() {
    this.cntObj.update((v) => {
      v.cntOnInit++;
      return { ...v };
    });
  }
  ngDoCheck() {
    this.cntObj.update((v) => {
      v.cntDoCheck++;
      return { ...v };
    });
  }
  ngAfterContentInit() {
    this.cntObj.update((v) => {
      v.cntAfterContentInit++;
      return { ...v };
    });
  }
  ngAfterContentChecked() {
    this.cntObj.update((v) => {
      v.cntAfterContentChecked++;
      return { ...v };
    });
  }
  ngAfterViewInit() {
    this.cntObj.update((v) => {
      v.cntAfterViewInit++;
      return { ...v };
    });
  }
  ngAfterViewChecked() {
    this.cntObj.update((v) => {
      v.cntAfterViewChecked++;
      return { ...v };
    });
  }
  ngOnDestroy() {
    this.cntObj.update((v) => {
      v.cntOnDestroy++;
      return { ...v };
    });
  }

  flag = signal(true);
  changeFlag() {
    this.flag.update((v) => !v);
  }
}
