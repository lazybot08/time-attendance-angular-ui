import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ManagerService } from '../../core/services/manager.service';
import { LeaveRequestResponse } from '../../core/model/common.model';

@Component({
  selector: 'app-manager-leave-request',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manager-leave-request.component.html',
  styleUrls: ['./manager-leave-request.component.css']
})
export class ManagerLeaveRequestComponent implements OnInit {

  managerService = inject(ManagerService);
  leaveList: LeaveRequestResponse[] = [];

  ngOnInit(): void {
    this.managerService.getAllLeaveRequestsByManager().subscribe({
      next: (response) => {
        this.leaveList = response;
      },
    });
  }

  updateStatus(requestId: number, status: string) {
    this.managerService.updateLeaveRequestOfEmployee(requestId, status).subscribe({
      next: (response) => {
        this.ngOnInit();
      },
      error: (error) => {
        console.error('Error updating status', error);
      }
    });
  }
}
