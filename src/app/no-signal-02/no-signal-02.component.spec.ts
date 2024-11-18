import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSignal02Component } from './no-signal-02.component';

describe('NoSignal02Component', () => {
  let component: NoSignal02Component;
  let fixture: ComponentFixture<NoSignal02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoSignal02Component],
    }).compileComponents();

    fixture = TestBed.createComponent(NoSignal02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
