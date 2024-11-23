import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartbuyNameComponent } from './cartbuy-name.component';

describe('CartbuyNameComponent', () => {
  let component: CartbuyNameComponent;
  let fixture: ComponentFixture<CartbuyNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartbuyNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartbuyNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
