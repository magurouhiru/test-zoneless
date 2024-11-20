import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CntService {
  data: Record<string, CntObj> = {};
  setData(label: string) {
    this.data[label] = getCntObj(label);
  }
  printData() {
    const tmp: Record<string, CntObj> = {};
    for (const k of Object.keys(this.data).sort()) {
      tmp[k] = this.data[k];
    }
    this.data = tmp;
    console.table(this.data);
    for (const k of Object.keys(this.data)) {
      const d = this.data[k] as unknown as Record<string, string>;
      for (const kk of Object.keys(d)) {
        d[kk] = d[kk].replaceAll(MARK, '');
      }
      this.data[k] = d as unknown as CntObj;
    }
  }
  addOnChanges(label: string) {
    const cnt = Number(this.data[label].cntOnChanges) + 1;
    this.data[label].cntOnChanges = cnt + MARK;
    this.printData();
  }
  addOnInit(label: string) {
    const cnt = Number(this.data[label].cntOnInit) + 1;
    this.data[label].cntOnInit = cnt + MARK;
    this.printData();
  }
  addDoCheck(label: string) {
    const cnt = Number(this.data[label].cntDoCheck) + 1;
    this.data[label].cntDoCheck = cnt + MARK;
    this.printData();
  }
  addAfterContentInit(label: string) {
    const cnt = Number(this.data[label].cntAfterContentInit) + 1;
    this.data[label].cntAfterContentInit = cnt + MARK;
    this.printData();
  }
  addAfterContentChecked(label: string) {
    const cnt = Number(this.data[label].cntAfterContentChecked) + 1;
    this.data[label].cntAfterContentChecked = cnt + MARK;
    this.printData();
  }
  addAfterViewInit(label: string) {
    const cnt = Number(this.data[label].cntAfterViewInit) + 1;
    this.data[label].cntAfterViewInit = cnt + MARK;
    this.printData();
  }
  addAfterViewChecked(label: string) {
    const cnt = Number(this.data[label].cntAfterViewChecked) + 1;
    this.data[label].cntAfterViewChecked = cnt + MARK;
    this.printData();
  }
  addOnDestroy(label: string) {
    const cnt = Number(this.data[label].cntOnDestroy) + 1;
    this.data[label].cntOnDestroy = cnt + MARK;
    this.printData();
  }
}

export interface CntObj {
  label: string;
  cntOnChanges: string;
  cntOnInit: string;
  cntDoCheck: string;
  cntAfterContentInit: string;
  cntAfterContentChecked: string;
  cntAfterViewInit: string;
  cntAfterViewChecked: string;
  cntOnDestroy: string;
}

export function getCntObj(label: string) {
  return {
    label: label,
    cntOnChanges: '',
    cntOnInit: '0',
    cntDoCheck: '0',
    cntAfterContentInit: '0',
    cntAfterContentChecked: '0',
    cntAfterViewInit: '0',
    cntAfterViewChecked: '0',
    cntOnDestroy: '0',
  } satisfies CntObj as CntObj;
}

const MARK = ' add';
