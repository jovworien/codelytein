import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuynowNameDescComponent } from './buynow-name-desc.component';

describe('BuynowNameDescComponent', () => {
  let component: BuynowNameDescComponent;
  let fixture: ComponentFixture<BuynowNameDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuynowNameDescComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuynowNameDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
