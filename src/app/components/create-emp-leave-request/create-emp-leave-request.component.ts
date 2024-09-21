import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../core/services/employee.service';
import { Router } from '@angular/router';
import { LocalStorage } from '../../core/constants/constants';

@Component({
  selector: 'app-create-emp-leave-request',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-emp-leave-request.component.html',
  styleUrl: './create-emp-leave-request.component.css'
})
export class CreateEmpLeaveRequestComponent {
  form: FormGroup;
  employeeService = inject(EmployeeService);
  router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      leaveType: new FormControl('', [Validators.required]),
      requestReason: new FormControl('', [Validators.required]),
    })
  }

  onSubmit() {
    if(this.form.valid) {
      const empId = localStorage.getItem(LocalStorage.empId);
      const managerId = localStorage.getItem(LocalStorage.managerId);

      const formData = {
        ...this.form.value,
        empId: empId,
        managerId: managerId,
      };

      this.employeeService.createNewLeaveRequest(formData).subscribe({
        next: (response) => {
          this.router.navigate(['/dashboard/employee-leave-requests']);
        }
      })
    }
  }
}
