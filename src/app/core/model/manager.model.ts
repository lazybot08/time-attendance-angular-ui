export interface DailyLog {
  workDate: Date;
  clockInTime: string;
  clockOutTime: string;
  breakStartTime: string;
  breakEndTime: string;
  workHours: number;
  netHours: number;
  overtimeHours: number;
}

export interface AttendanceReport {
  empId: number;
  empName?: string;
  dailyLogs?: DailyLog[];
  totalWorkHours: number;
  totalNetHours: number;
  totalOvertimeHours: number;
}

export interface AttendancePayload{
    empId: number;
    startDate: Date;
    endDate: Date;
}
