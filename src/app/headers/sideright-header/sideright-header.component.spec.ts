import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderightHeaderComponent } from './sideright-header.component';

describe('SiderightHeaderComponent', () => {
  let component: SiderightHeaderComponent;
  let fixture: ComponentFixture<SiderightHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiderightHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiderightHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
