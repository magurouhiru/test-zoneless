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

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss',
})
export class BaseComponent
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
  // 基本情報
  name = 'base';

  // ライフサイクル監視
  constructor() {
    this.id = this.cntService.getId();
    this.cntService.addConstructor(this.id);
  }
  cntService = inject(CntService);
  id!: string;
  label = '';
  // ラベルプロパティを更新
  // 親コンポーネント名を取得することを考慮してngOnInit()で実行
  setLabel() {
    this.label = this.name;
  }
  ngOnChanges(changes: SimpleChanges) {
    this.cntService.addOnChanges(this.id);
  }
  ngOnInit() {
    this.setLabel();
    this.cntService.updateLabel(this.id, this.label);
    this.cntService.addOnInit(this.id);
  }
  ngDoCheck() {
    this.cntService.addDoCheck(this.id);
  }
  ngAfterContentInit() {
    this.cntService.addAfterContentInit(this.id);
  }
  ngAfterContentChecked() {
    this.cntService.addAfterContentChecked(this.id);
  }
  ngAfterViewInit() {
    this.cntService.addAfterViewInit(this.id);
  }
  ngAfterViewChecked() {
    this.cntService.addAfterViewChecked(this.id);
  }
  ngOnDestroy() {
    this.cntService.addOnDestroy(this.id);
  }
}
