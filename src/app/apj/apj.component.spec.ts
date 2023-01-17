import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APJComponent } from './apj.component';

describe('APJComponent', () => {
  let component: APJComponent;
  let fixture: ComponentFixture<APJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APJComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
