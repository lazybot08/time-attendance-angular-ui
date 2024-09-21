import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmpTimeRequestComponent } from './create-emp-time-request.component';

describe('CreateEmpTimeRequestComponent', () => {
  let component: CreateEmpTimeRequestComponent;
  let fixture: ComponentFixture<CreateEmpTimeRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEmpTimeRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmpTimeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
