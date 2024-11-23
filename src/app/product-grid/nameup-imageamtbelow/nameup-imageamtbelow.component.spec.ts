import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameupImageamtbelowComponent } from './nameup-imageamtbelow.component';

describe('NameupImageamtbelowComponent', () => {
  let component: NameupImageamtbelowComponent;
  let fixture: ComponentFixture<NameupImageamtbelowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NameupImageamtbelowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameupImageamtbelowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
