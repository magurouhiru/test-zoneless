import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signal02Component } from './signal-02.component';

describe('Signal02Component', () => {
  let component: Signal02Component;
  let fixture: ComponentFixture<Signal02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signal02Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Signal02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
