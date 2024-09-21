import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LeaveRequestResponse } from '../../core/model/common.model';
import { EmployeeService } from '../../core/services/employee.service';

@Component({
  selector: 'app-emp-leave-request',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './emp-leave-request.component.html',
  styleUrl: './emp-leave-request.component.css'
})
export class EmpLeaveRequestComponent {
  employeeService = inject(EmployeeService);
  leaveList: LeaveRequestResponse[] = [];

  ngOnInit(): void {
    this.employeeService.getAllLeaveRequestsByEmployee().subscribe({
      next: (response) => {
        this.leaveList = response;
      },
    });
  }
}
