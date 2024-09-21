import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmpLeaveRequestComponent } from './create-emp-leave-request.component';

describe('CreateEmpLeaveRequestComponent', () => {
  let component: CreateEmpLeaveRequestComponent;
  let fixture: ComponentFixture<CreateEmpLeaveRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEmpLeaveRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmpLeaveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
