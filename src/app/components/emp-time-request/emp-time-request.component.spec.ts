import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpTimeRequestComponent } from './emp-time-request.component';

describe('EmpTimeRequestComponent', () => {
  let component: EmpTimeRequestComponent;
  let fixture: ComponentFixture<EmpTimeRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpTimeRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpTimeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
