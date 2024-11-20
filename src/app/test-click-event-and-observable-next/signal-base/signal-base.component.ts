import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  computed,
  DoCheck,
  inject,
  input,
  OnChanges,
  OnDestroy,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';
import { CntService } from '../../cnt.service';
import { interval, take } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

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
  name = signal('signal-base');
  label = computed(() => this.name() + ':' + this.parentName());
  // インプット
  parentName = input.required<string>();

  flag = signal(true);
  changeFlag() {
    this.flag.update((v) => !v);
  }

  interval = interval(1000).pipe(take(5));
  value = toSignal(this.interval);

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
