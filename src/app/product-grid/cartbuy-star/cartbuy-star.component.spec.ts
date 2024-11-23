import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartbuyStarComponent } from './cartbuy-star.component';

describe('CartbuyStarComponent', () => {
  let component: CartbuyStarComponent;
  let fixture: ComponentFixture<CartbuyStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartbuyStarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartbuyStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
