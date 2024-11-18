import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CntService } from '../cnt.service';

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
  cntService = inject(CntService);
  // インプット
  @Input() title = '';
  // ライフサイクル監視
  ngOnChanges(changes: SimpleChanges) {}
  ngOnInit() {
    this.cntService.setData(this.title);
    this.cntService.addOnInit(this.title);
  }
  ngDoCheck() {
    this.cntService.addDoCheck(this.title);
  }
  ngAfterContentInit() {
    this.cntService.addAfterContentInit(this.title);
  }
  ngAfterContentChecked() {
    this.cntService.addAfterContentChecked(this.title);
  }
  ngAfterViewInit() {
    this.cntService.addAfterViewInit(this.title);
  }
  ngAfterViewChecked() {
    this.cntService.addAfterViewChecked(this.title);
  }
  ngOnDestroy() {
    this.cntService.addOnDestroy(this.title);
  }

  flag = true;
  changeFlag() {
    this.flag = !this.flag;
  }
}
