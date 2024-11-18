export interface CntObj {
  cntOnChanges: number;
  cntOnInit: number;
  cntDoCheck: number;
  cntAfterContentInit: number;
  cntAfterContentChecked: number;
  cntAfterViewInit: number;
  cntAfterViewChecked: number;
  cntOnDestroy: number;
}

export function getCntObj() {
  return {
    cntOnChanges: 0,
    cntOnInit: 0,
    cntDoCheck: 0,
    cntAfterContentInit: 0,
    cntAfterContentChecked: 0,
    cntAfterViewInit: 0,
    cntAfterViewChecked: 0,
    cntOnDestroy: 0,
  } satisfies CntObj as CntObj;
}
