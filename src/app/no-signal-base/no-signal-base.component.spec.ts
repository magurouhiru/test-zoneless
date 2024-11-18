import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSignalBaseComponent } from './no-signal-base.component';

describe('NoSignalBaseComponent', () => {
  let component: NoSignalBaseComponent;
  let fixture: ComponentFixture<NoSignalBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoSignalBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoSignalBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
