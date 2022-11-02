import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCRUDComponent } from './emp-crud.component';

describe('EmpCRUDComponent', () => {
  let component: EmpCRUDComponent;
  let fixture: ComponentFixture<EmpCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpCRUDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
