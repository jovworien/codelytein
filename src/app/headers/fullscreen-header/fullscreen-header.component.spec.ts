import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenHeaderComponent } from './fullscreen-header.component';

describe('FullscreenHeaderComponent', () => {
  let component: FullscreenHeaderComponent;
  let fixture: ComponentFixture<FullscreenHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullscreenHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullscreenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
