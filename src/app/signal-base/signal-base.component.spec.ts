import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalBaseComponent } from './signal-base.component';

describe('SignalBaseComponent', () => {
  let component: SignalBaseComponent;
  let fixture: ComponentFixture<SignalBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalBaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
