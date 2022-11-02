import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuserdataComponent } from './prouserdata.component';

describe('ProuserdataComponent', () => {
  let component: ProuserdataComponent;
  let fixture: ComponentFixture<ProuserdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProuserdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProuserdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
