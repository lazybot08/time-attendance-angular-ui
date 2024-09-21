import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ManagerService } from '../../core/services/manager.service';
import { TimeRequestResponse } from '../../core/model/common.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manager-time-request',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './manager-time-request.component.html',
  styleUrl: './manager-time-request.component.css'
})
export class ManagerTimeRequestComponent implements OnInit {

  managerService = inject(ManagerService);
  timeOffList: TimeRequestResponse[] = [];

  ngOnInit(): void {
    this.managerService.getAllTimeOffRequestsByManager().subscribe({
      next: (response) => {
        this.timeOffList = response;
      },
    });
  }

  updateStatus(requestId: number, status: string) {
    this.managerService.updateTimeOffRequestOfEmployee(requestId, status).subscribe({
      next: (response) => {
        this.ngOnInit();
      },
      error: (error) => {
        console.error('Error updating status', error);
      }
    });
  }
}
