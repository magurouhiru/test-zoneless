import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { getCntObj } from '../if';

@Component({
  selector: 'app-no-signal-base',
  standalone: true,
  imports: [],
  templateUrl: './no-signal-base.component.html',
  styleUrl: './no-signal-base.component.scss',
})
export class NoSignalBaseComponent
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
  @Input() title = '';
  // ライフサイクル監視
  ngOnChanges(changes: SimpleChanges) {
    cntObj.cntOnChanges++;
    console.table(cntObj);
  }
  ngOnInit() {
    cntObj.label = this.title;
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

  flag = true;
  changeFlag() {
    this.flag = !this.flag;
  }
}

const cntObj = getCntObj();
