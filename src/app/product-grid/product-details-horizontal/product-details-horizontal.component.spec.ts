import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsHorizontalComponent } from './product-details-horizontal.component';

describe('ProductDetailsHorizontalComponent', () => {
  let component: ProductDetailsHorizontalComponent;
  let fixture: ComponentFixture<ProductDetailsHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailsHorizontalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
