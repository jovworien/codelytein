import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameofProductinimageComponent } from './nameof-productinimage.component';

describe('NameofProductinimageComponent', () => {
  let component: NameofProductinimageComponent;
  let fixture: ComponentFixture<NameofProductinimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NameofProductinimageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameofProductinimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
