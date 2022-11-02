import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdataJSONComponent } from './empdata-json.component';

describe('EmpdataJSONComponent', () => {
  let component: EmpdataJSONComponent;
  let fixture: ComponentFixture<EmpdataJSONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpdataJSONComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpdataJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
