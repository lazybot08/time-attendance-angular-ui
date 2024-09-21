import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../core/services/employee.service';
import { Router } from '@angular/router';
import { LocalStorage } from '../../core/constants/constants';
@Component({
  selector: 'app-create-emp-time-request',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-emp-time-request.component.html',
  styleUrl: './create-emp-time-request.component.css'
})
export class CreateEmpTimeRequestComponent {
  form: FormGroup;
  employeeService = inject(EmployeeService);
  router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      timeOffDate: new FormControl('', [Validators.required]),
      startTime: new FormControl('', [Validators.required]),
      endTime: new FormControl('', [Validators.required]),
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

      this.employeeService.createNewTimeOffRequest(formData).subscribe({
        next: (response) => {
          this.router.navigate(['/dashboard/employee-time-requests']);
        }
      })
    }
  }
}
