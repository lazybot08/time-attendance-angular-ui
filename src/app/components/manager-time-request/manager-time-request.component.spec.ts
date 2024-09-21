import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTimeRequestComponent } from './manager-time-request.component';

describe('ManagerTimeRequestComponent', () => {
  let component: ManagerTimeRequestComponent;
  let fixture: ComponentFixture<ManagerTimeRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerTimeRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerTimeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
