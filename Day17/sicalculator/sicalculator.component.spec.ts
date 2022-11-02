import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SIcalculatorComponent } from './sicalculator.component';

describe('SIcalculatorComponent', () => {
  let component: SIcalculatorComponent;
  let fixture: ComponentFixture<SIcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SIcalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SIcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
