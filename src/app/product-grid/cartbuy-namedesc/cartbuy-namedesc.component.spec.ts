import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartbuyNamedescComponent } from './cartbuy-namedesc.component';

describe('CartbuyNamedescComponent', () => {
  let component: CartbuyNamedescComponent;
  let fixture: ComponentFixture<CartbuyNamedescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartbuyNamedescComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartbuyNamedescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
