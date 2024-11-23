import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeFootersComponent } from './large-footers.component';

describe('LargeFootersComponent', () => {
  let component: LargeFootersComponent;
  let fixture: ComponentFixture<LargeFootersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LargeFootersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeFootersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
