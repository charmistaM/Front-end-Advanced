import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustompipegradesComponent } from './custompipegrades.component';

describe('CustompipegradesComponent', () => {
  let component: CustompipegradesComponent;
  let fixture: ComponentFixture<CustompipegradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustompipegradesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustompipegradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
