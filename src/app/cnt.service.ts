import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CntService {
  data: Record<string, CntObj> = {};
  setData(title: string) {
    this.data[title] = getCntObj(title);
  }
  printData() {
    console.table(this.data);
    for (const k of Object.keys(this.data)) {
      const d = this.data[k] as unknown as Record<string, string>;
      for (const kk of Object.keys(d)) {
        d[kk] = d[kk].replaceAll(MARK, '');
      }
      this.data[k] = d as unknown as CntObj;
    }
  }
  addOnChanges(title: string) {
    const cnt = Number(this.data[title].cntOnChanges) + 1;
    this.data[title].cntOnChanges = cnt + MARK;
    this.printData();
  }
  addOnInit(title: string) {
    const cnt = Number(this.data[title].cntOnInit) + 1;
    this.data[title].cntOnInit = cnt + MARK;
    this.printData();
  }
  addDoCheck(title: string) {
    const cnt = Number(this.data[title].cntDoCheck) + 1;
    this.data[title].cntDoCheck = cnt + MARK;
    this.printData();
  }
  addAfterContentInit(title: string) {
    const cnt = Number(this.data[title].cntAfterContentInit) + 1;
    this.data[title].cntAfterContentInit = cnt + MARK;
    this.printData();
  }
  addAfterContentChecked(title: string) {
    const cnt = Number(this.data[title].cntAfterContentChecked) + 1;
    this.data[title].cntAfterContentChecked = cnt + MARK;
    this.printData();
  }
  addAfterViewInit(title: string) {
    const cnt = Number(this.data[title].cntAfterViewInit) + 1;
    this.data[title].cntAfterViewInit = cnt + MARK;
    this.printData();
  }
  addAfterViewChecked(title: string) {
    const cnt = Number(this.data[title].cntAfterViewChecked) + 1;
    this.data[title].cntAfterViewChecked = cnt + MARK;
    this.printData();
  }
  addOnDestroy(title: string) {
    const cnt = Number(this.data[title].cntOnDestroy) + 1;
    this.data[title].cntOnDestroy = cnt + MARK;
    this.printData();
  }
}

export interface CntObj {
  title: string;
  cntOnChanges: string;
  cntOnInit: string;
  cntDoCheck: string;
  cntAfterContentInit: string;
  cntAfterContentChecked: string;
  cntAfterViewInit: string;
  cntAfterViewChecked: string;
  cntOnDestroy: string;
}

export function getCntObj(title: string) {
  return {
    title: title,
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
