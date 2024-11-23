import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAmountnameComponent } from './grid-amountname.component';

describe('GridAmountnameComponent', () => {
  let component: GridAmountnameComponent;
  let fixture: ComponentFixture<GridAmountnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridAmountnameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridAmountnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
