import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CntService {
  data: Record<string, CntObj> = {};
  cntId = 0;
  getId() {
    const id = String(this.cntId++);
    this.data[id] = getCntObj();
    return id;
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
  addOnChanges(id: string) {
    const cnt = Number(this.data[id].cntOnChanges) + 1;
    this.data[id].cntOnChanges = cnt + MARK;
    this.printData();
  }
  addOnInit(id: string) {
    const cnt = Number(this.data[id].cntOnInit) + 1;
    this.data[id].cntOnInit = cnt + MARK;
    this.printData();
  }
  addDoCheck(id: string) {
    const cnt = Number(this.data[id].cntDoCheck) + 1;
    this.data[id].cntDoCheck = cnt + MARK;
    this.printData();
  }
  addAfterContentInit(id: string) {
    const cnt = Number(this.data[id].cntAfterContentInit) + 1;
    this.data[id].cntAfterContentInit = cnt + MARK;
    this.printData();
  }
  addAfterContentChecked(id: string) {
    const cnt = Number(this.data[id].cntAfterContentChecked) + 1;
    this.data[id].cntAfterContentChecked = cnt + MARK;
    this.printData();
  }
  addAfterViewInit(id: string) {
    const cnt = Number(this.data[id].cntAfterViewInit) + 1;
    this.data[id].cntAfterViewInit = cnt + MARK;
    this.printData();
  }
  addAfterViewChecked(id: string) {
    const cnt = Number(this.data[id].cntAfterViewChecked) + 1;
    this.data[id].cntAfterViewChecked = cnt + MARK;
    this.printData();
  }
  addOnDestroy(id: string) {
    const cnt = Number(this.data[id].cntOnDestroy) + 1;
    this.data[id].cntOnDestroy = cnt + MARK;
    this.printData();
  }
  updateLabel(id: string, label: string) {
    this.data[id].label = label;
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

export function getCntObj() {
  return {
    label: '',
    cntOnChanges: '0',
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
