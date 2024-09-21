import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../core/services/employee.service';
import { TimeRequestResponse } from '../../core/model/common.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-emp-time-request',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './emp-time-request.component.html',
  styleUrl: './emp-time-request.component.css'
})
export class EmpTimeRequestComponent implements OnInit{
  employeeService = inject(EmployeeService);
  timeOffList: TimeRequestResponse[] = [];

  ngOnInit(): void {
    this.employeeService.getAllTimeOffRequestsByEmployee().subscribe({
      next: (response) => {
        this.timeOffList = response;
      },
    });
  }
}
