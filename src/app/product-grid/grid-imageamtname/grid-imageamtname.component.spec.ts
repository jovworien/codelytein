import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridImageamtnameComponent } from './grid-imageamtname.component';

describe('GridImageamtnameComponent', () => {
  let component: GridImageamtnameComponent;
  let fixture: ComponentFixture<GridImageamtnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridImageamtnameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridImageamtnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
