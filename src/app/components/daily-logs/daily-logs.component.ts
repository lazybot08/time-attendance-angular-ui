import { Component, OnInit } from '@angular/core';
import { DailyLog } from '../../core/model/manager.model';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from '../../core/services/manager.service';
import { HttpParams } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-daily-logs',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './daily-logs.component.html',
  styleUrls: ['./daily-logs.component.css'],
})
export class DailyLogsComponent implements OnInit {
  dailyLogReport: DailyLog[] = [];
  fromDate: string = '';
  toDate: string = '';
  empId: string | null = null;
  currentPage: number = 0;
  recordsPerPage: number = 10;
  totalRecords: number = 0;

  constructor(
    private route: ActivatedRoute,
    private managerService: ManagerService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.empId = params.get('empId');

      const today = new Date();
      this.toDate = today.toISOString().split('T')[0];
      const lastMonth = new Date(today.setDate(today.getDate() - 30));
      this.fromDate = lastMonth.toISOString().split('T')[0];

      this.loadDailyLogs(this.currentPage);
    });
  }

  loadDailyLogs(page: number): void {
    let params = new HttpParams()
      .set('empId', this.empId || '')
      .set('startDate', this.fromDate)
      .set('endDate', this.toDate)
      .set('page', page.toString())
      .set('size', this.recordsPerPage.toString());
    this.managerService.getDailyLogReport(params).subscribe(
      (response) => {
        this.dailyLogReport = response.logs;
        this.totalRecords = response.total;
        this.currentPage = page;
      },
      (error) => {
        console.error('Error fetching daily logs:', error);
      }
    );
  }

  filterByDate(): void {
    if (new Date(this.fromDate) > new Date(this.toDate)) {
      alert('From Date should be before To Date');
      return;
    }
    this.currentPage = 0;
    this.loadDailyLogs(this.currentPage);
  }

  clearDate(): void {
    this.fromDate = '';
    this.toDate = '';
    this.currentPage = 0;
    this.loadDailyLogs(this.currentPage);
  }

  totalPages(): number {
    return Math.ceil(this.totalRecords / this.recordsPerPage);
  }
}
