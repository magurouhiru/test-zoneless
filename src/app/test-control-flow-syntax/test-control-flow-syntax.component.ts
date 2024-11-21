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
import { CntService } from '../cnt.service';
import { SignalComponent } from './signal/signal.component';
import { NoSignalComponent } from './no-signal/no-signal.component';

@Component({
  selector: 'app-test-control-flow-syntax',
  standalone: true,
  imports: [SignalComponent, NoSignalComponent],
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

  // 変更検知発火用のクリックイベント
  click() {}

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
