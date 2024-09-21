import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AttendanceReportComponent } from './components/attendance-report/attendance-report.component';
import { DailyLogsComponent } from './components/daily-logs/daily-logs.component';
import { ManagerLeaveRequestComponent } from './components/manager-leave-request/manager-leave-request.component';
import { ManagerTimeRequestComponent } from './components/manager-time-request/manager-time-request.component';
import { EmpTimeRequestComponent } from './components/emp-time-request/emp-time-request.component';
import { EmpLeaveRequestComponent } from './components/emp-leave-request/emp-leave-request.component';
import { CreateEmpTimeRequestComponent } from './components/create-emp-time-request/create-emp-time-request.component';
import { CreateEmpLeaveRequestComponent } from './components/create-emp-leave-request/create-emp-leave-request.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    component: DashboardComponent,
    children: [
      {
        path: 'employee-details',
        canActivate: [authGuard],
        component: EmployeeListComponent,
      },
      {
        path: 'profile',
        canActivate: [authGuard],
        component: AccountDetailsComponent,
      },
      {
        path: 'attendance-report',
        canActivate: [authGuard],
        component: AttendanceReportComponent,
      },
      {
        path: 'manager-time-requests',
        canActivate: [authGuard],
        component: ManagerTimeRequestComponent,
      },
      {
        path: 'manager-leave-requests',
        canActivate: [authGuard],
        component: ManagerLeaveRequestComponent,
      },
      {
        path: 'employee-time-requests',
        canActivate: [authGuard],
        component: EmpTimeRequestComponent,
      },
      {
        path: 'employee-leave-requests',
        canActivate: [authGuard],
        component: EmpLeaveRequestComponent,
      },
      {
        path: 'daily-logs/:empId',
        canActivate: [authGuard],
        component: DailyLogsComponent,
      },
      {
        path: 'create-employee-time-request',
        canActivate: [authGuard],
        component: CreateEmpTimeRequestComponent,
      },
      {
        path: 'create-employee-leave-request',
        canActivate: [authGuard],
        component: CreateEmpLeaveRequestComponent,
      }
    ],
  },
  {
    path: 'login',
    canActivate: [guestGuard],
    component: LoginComponent
  },
  {
    path: 'register',
    canActivate: [guestGuard],
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
