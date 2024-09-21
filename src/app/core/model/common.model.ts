export interface User {
  empId: number;
  firstName: string;
  lastName: string;
  email: string;
  mobile: number;
  birthDate: Date;
  gender: string;
  address: string;
  designation: string;
  department: string;
  hireDate: Date;
  role: string;
  manager?: {
    empId: number;
    firstName: string;
    lastName: string;
    email: string;
  };
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobile: number;
  birthDate: string;
  gender: string;
  address: string;
  designation: string;
  department: string;
  managerId: number;
  hireDate: string;
}

export interface ApiResponse<T> {
  success: boolean;
  token: string;
  message: string;
  data: T;
}

export interface TimeRequestResponse {
  requestId: number;
  managerId: number;
  empId: number;
  empName: string;
  timeOffDate: Date;
  startTime: string;
  endTime: string;
  requestDateTime: Date;
  requestReason: string;
  status: string;
}

export interface TimeRequestRequest {
  managerId: number;
  empId: number;
  timeOffDate: Date;
  startTime: string;
  endTime: string;
  requestReason: string;
}

export interface LeaveRequestResponse {
  requestId: number;
  managerId: number;
  empId: number;
  empName: string;
  startDate: Date;
  endDate: Date;
  requestDateTime: Date;
  leaveType: string;
  requestReason: string;
  status: string;
}

export interface LeaveRequestRequest {
  managerId: number;
  empId: number;
  startDate: Date;
  endDate: Date;
  leaveType: string;
  requestReason: string;
}
