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
  cntService = inject(CntService);
  // インプット
  title = input.required<string>();
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

  flag = signal(true);
  changeFlag() {
    this.flag.update((v) => !v);
  }
}
