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
  signal,
  SimpleChanges,
} from '@angular/core';
import { SignalBaseComponent } from '../signal-base/signal-base.component';
import { CntService } from '../../cnt.service';

@Component({
  selector: 'app-signal-02',
  standalone: true,
  imports: [SignalBaseComponent],
  templateUrl: './signal-02.component.html',
  styleUrl: './signal-02.component.scss',
})
export class Signal02Component
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
  name = signal('signal-02');
  label = computed(() => this.name());

  // ライフサイクル監視
  cntService = inject(CntService);
  ngOnChanges(changes: SimpleChanges) {}
  ngOnInit() {
    this.cntService.setData(this.label());
    this.cntService.addOnInit(this.label());
  }
  ngDoCheck() {
    this.cntService.addDoCheck(this.label());
  }
  ngAfterContentInit() {
    this.cntService.addAfterContentInit(this.label());
  }
  ngAfterContentChecked() {
    this.cntService.addAfterContentChecked(this.label());
  }
  ngAfterViewInit() {
    this.cntService.addAfterViewInit(this.label());
  }
  ngAfterViewChecked() {
    this.cntService.addAfterViewChecked(this.label());
  }
  ngOnDestroy() {
    this.cntService.addOnDestroy(this.label());
  }
}
