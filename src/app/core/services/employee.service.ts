import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEndpoint } from '../constants/constants';
import {
  LeaveRequestRequest,
  LeaveRequestResponse,
  TimeRequestRequest,
  TimeRequestResponse,
  User,
} from '../model/common.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getAllTimeOffRequestsByEmployee() {
    return this.http.get<TimeRequestResponse[]>(
      `${ApiEndpoint.Employee.TimeOffRequest}`
    );
  }

  getAllLeaveRequestsByEmployee() {
    return this.http.get<LeaveRequestResponse[]>(
      `${ApiEndpoint.Employee.LeaveRequest}`
    );
  }

  createNewTimeOffRequest(payload: TimeRequestRequest) {
    return this.http.post<void>(`${ApiEndpoint.Employee.TimeOffRequest}`, payload);
  }

  createNewLeaveRequest(payload: LeaveRequestRequest) {
    return this.http.post<void>(`${ApiEndpoint.Employee.LeaveRequest}`, payload);
  }
}
