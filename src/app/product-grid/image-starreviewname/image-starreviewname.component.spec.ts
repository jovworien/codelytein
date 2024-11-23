import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageStarreviewnameComponent } from './image-starreviewname.component';

describe('ImageStarreviewnameComponent', () => {
  let component: ImageStarreviewnameComponent;
  let fixture: ComponentFixture<ImageStarreviewnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageStarreviewnameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageStarreviewnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
