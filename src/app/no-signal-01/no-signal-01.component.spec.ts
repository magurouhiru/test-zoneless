import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSignal01Component } from './no-signal-01.component';

describe('NoSignal01Component', () => {
  let component: NoSignal01Component;
  let fixture: ComponentFixture<NoSignal01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoSignal01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoSignal01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
