const apiUrl = 'http://localhost:8081/api/v1';

export const ApiEndpoint = {
    Auth:{
        Register: `${apiUrl}/auth/register-employee`,
        Login: `${apiUrl}/auth/login`,
        CurrentUser: `${apiUrl}/auth/current-user`,
        Logout: `${apiUrl}/entry/clock-out`,
        EmployeeDetails: `${apiUrl}/auth/employees`
    },
    Manager:{
        EmployeeDetails: `${apiUrl}/auth/employees-by-manager`,
        AttendanceReport: `${apiUrl}/entry/report`,
        AttendanceReportThreeMonth: `${apiUrl}/attendance/three-months`,
        AttendanceReportOneMonth: `${apiUrl}/attendance/month`,
        AttendanceReportOneWeek: `${apiUrl}/attendance/week`,
        DailyLogReport: `${apiUrl}/entry/daily-logs`,
        TimeOffRequest: `${apiUrl}/request/time-requests`,
        LeaveRequest: `${apiUrl}/request/leave-requests`,
        UpdateStatusTimeOffRequest: `${apiUrl}/requests/time-request/manager`,
        UpdateStatusLeaveRequest: `${apiUrl}/requests/leave-request/manager`,
    },
    Employee:{
        TimeOffRequest: `${apiUrl}/requests/time-request/employee`,
        LeaveRequest: `${apiUrl}/requests/leave-request/employee`,
    }
};

export const LocalStorage = {
    token: 'USER_TOKEN',
    role: 'USER_ROLE',
    empId: 'USER_ID',
    managerId: 'MANAGER_ID'
};