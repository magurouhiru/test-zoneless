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
  cntObj = getCntObj();
  print = () => {
    console.table(this.cntObj);
  };
  ngOnChanges(changes: SimpleChanges) {
    this.cntObj.cntOnChanges++;
    this.print();
  }
  ngOnInit() {
    this.cntObj.cntOnInit++;
    this.print();
  }
  ngDoCheck() {
    this.cntObj.cntDoCheck++;
    this.print();
  }
  ngAfterContentInit() {
    this.cntObj.cntAfterContentInit++;
    this.print();
  }
  ngAfterContentChecked() {
    this.cntObj.cntAfterContentChecked++;
    this.print();
  }
  ngAfterViewInit() {
    this.cntObj.cntAfterViewInit++;
    this.print();
  }
  ngAfterViewChecked() {
    this.cntObj.cntAfterViewChecked++;
    this.print();
  }
  ngOnDestroy() {
    this.cntObj.cntOnDestroy++;
    this.print();
  }

  flag = true;
  changeFlag() {
    this.flag = !this.flag;
  }
}
