import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallFootersComponent } from './small-footers.component';

describe('SmallFootersComponent', () => {
  let component: SmallFootersComponent;
  let fixture: ComponentFixture<SmallFootersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmallFootersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallFootersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
