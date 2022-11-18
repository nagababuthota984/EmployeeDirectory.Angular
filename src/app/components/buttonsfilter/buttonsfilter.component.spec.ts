import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsfilterComponent } from './buttonsfilter.component';

describe('ButtonsfilterComponent', () => {
  let component: ButtonsfilterComponent;
  let fixture: ComponentFixture<ButtonsfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsfilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
