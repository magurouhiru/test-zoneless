import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signal01Component } from './signal-01.component';

describe('Signal01Component', () => {
  let component: Signal01Component;
  let fixture: ComponentFixture<Signal01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signal01Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Signal01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
