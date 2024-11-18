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
  ngOnChanges(changes: SimpleChanges) {
    cntObj.cntOnChanges++;
    console.table(cntObj);
  }
  ngOnInit() {
    cntObj.label = this.title();
    cntObj.cntOnInit++;
    console.table(cntObj);
  }
  ngDoCheck() {
    cntObj.cntDoCheck++;
    console.table(cntObj);
  }
  ngAfterContentInit() {
    cntObj.cntAfterContentInit++;
    console.table(cntObj);
  }
  ngAfterContentChecked() {
    cntObj.cntAfterContentChecked++;
    console.table(cntObj);
  }
  ngAfterViewInit() {
    cntObj.cntAfterViewInit++;
    console.table(cntObj);
  }
  ngAfterViewChecked() {
    cntObj.cntAfterViewChecked++;
    console.table(cntObj);
  }
  ngOnDestroy() {}

  flag = signal(true);
  changeFlag() {
    this.flag.update((v) => !v);
  }
}

const cntObj = getCntObj();
