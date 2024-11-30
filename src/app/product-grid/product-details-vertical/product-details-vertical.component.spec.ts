import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsVerticalComponent } from './product-details-vertical.component';

describe('ProductDetailsVerticalComponent', () => {
  let component: ProductDetailsVerticalComponent;
  let fixture: ComponentFixture<ProductDetailsVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailsVerticalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
