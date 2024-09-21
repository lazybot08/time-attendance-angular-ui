import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../core/model/common.model';
import { ManagerService } from '../../core/services/manager.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
  managerService = inject(ManagerService);
  empList!: User[];

  ngOnInit(): void {
    this.managerService.EmployeeDetails().subscribe({
      next: (response) => {
        this.empList = response;
      },
    });
  }
}
