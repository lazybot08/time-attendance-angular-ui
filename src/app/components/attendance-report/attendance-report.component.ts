import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AttendanceReport } from '../../core/model/manager.model';
import { ManagerService } from '../../core/services/manager.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attendance-report',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './attendance-report.component.html',
  styleUrls: ['./attendance-report.component.css']
})
export class AttendanceReportComponent implements OnInit {
  managerService = inject(ManagerService);
  router = inject(Router);
  empReports: { [key: string]: AttendanceReport[] } = {
    week: [],
    month: [],
    threeMonths: []
  };
  empReportList: AttendanceReport[] = [];
  currentPeriod: string = 'week';

  ngOnInit(): void {
    this.loadAttendanceReports();
  }

  loadAttendanceReports() {
    this.managerService.getAttendanceReportLastWeek().subscribe(response => {
      this.empReports['week'] = response; 
      this.empReportList = response;
    });
    this.managerService.getAttendanceReportLastMonth().subscribe(response => {
      this.empReports['month'] = response; 
    });
    this.managerService.getAttendanceReportLastThreeMonths().subscribe(response => {
      this.empReports['threeMonths'] = response; 
    });
  }

  filterAttendance(period: string) {
    this.currentPeriod = period; 
    this.empReportList = this.empReports[period]; 
  }

  goToDailyLogs(empId: number) {
    this.router.navigate(['daily-logs', empId]);
  }
}
