import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiEndpoint } from '../constants/constants';
import {
  LeaveRequestResponse,
  TimeRequestResponse,
  User,
} from '../model/common.model';
import { Observable } from 'rxjs';
import {
  AttendancePayload,
  AttendanceReport,
  DailyLog,
} from '../model/manager.model';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  constructor(private http: HttpClient) {}

  EmployeeDetails() {
    return this.http.get<User[]>(`${ApiEndpoint.Manager.EmployeeDetails}`);
  }
  getAttendanceReport(payload: AttendancePayload) {
    let params = new HttpParams()
      .set('empId', payload.empId.toString())
      .set('startDate', payload.startDate.toISOString())
      .set('endDate', payload.endDate.toISOString());

    return this.http.get<AttendanceReport>(
      `${ApiEndpoint.Manager.AttendanceReport}`,
      { params }
    );
  }
  getDailyLogReport(
    params: HttpParams
  ): Observable<{ logs: DailyLog[]; total: number }> {
    return this.http.get<{ logs: DailyLog[]; total: number }>(
      `${ApiEndpoint.Manager.DailyLogReport}`,
      { params }
    );
  }

  getAttendanceReportLastThreeMonths() {
    return this.http.get<AttendanceReport[]>(
      `${ApiEndpoint.Manager.AttendanceReportThreeMonth}`
    );
  }

  getAttendanceReportLastMonth() {
    return this.http.get<AttendanceReport[]>(
      `${ApiEndpoint.Manager.AttendanceReportOneMonth}`
    );
  }

  getAttendanceReportLastWeek() {
    return this.http.get<AttendanceReport[]>(
      `${ApiEndpoint.Manager.AttendanceReportOneWeek}`
    );
  }

  getAllTimeOffRequestsByManager() {
    return this.http.get<TimeRequestResponse[]>(
      `${ApiEndpoint.Manager.TimeOffRequest}`
    );
  }

  getAllLeaveRequestsByManager() {
    return this.http.get<LeaveRequestResponse[]>(
      `${ApiEndpoint.Manager.LeaveRequest}`
    );
  }

  updateTimeOffRequestOfEmployee(requestId: number, status: string) {
    let params = new HttpParams().set('status', status);
    return this.http.put<void>(
      `${ApiEndpoint.Manager.UpdateStatusTimeOffRequest}/${requestId}`, null,
      { params }
    );
  }

  updateLeaveRequestOfEmployee(requestId: number, status: string) {
    let params = new HttpParams().set('status', status);
    return this.http.put<void>(
      `${ApiEndpoint.Manager.UpdateStatusLeaveRequest}/${requestId}`, null,
      { params }
    );
  }
}
