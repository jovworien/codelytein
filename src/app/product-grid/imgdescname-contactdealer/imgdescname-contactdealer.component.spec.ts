import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgdescnameContactdealerComponent } from './imgdescname-contactdealer.component';

describe('ImgdescnameContactdealerComponent', () => {
  let component: ImgdescnameContactdealerComponent;
  let fixture: ComponentFixture<ImgdescnameContactdealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgdescnameContactdealerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgdescnameContactdealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
