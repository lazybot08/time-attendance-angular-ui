import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ApiResponse, LoginPayload, RegisterPayload, User } from '../model/common.model';
import { ApiEndpoint, LocalStorage } from '../constants/constants';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = signal<boolean>(false);
  router = inject(Router);

  constructor(private http: HttpClient) { 
    if (this.getUserToken()) {
      this.isLoggedIn.update(() => true);
    }
  }

  register(payload: RegisterPayload) {
    return this.http.post<ApiResponse<User>>(`${ApiEndpoint.Auth.Register}`, payload);
  }

  login(payload: LoginPayload) {
    return this.http.post<ApiResponse<User>>(`${ApiEndpoint.Auth.Login}`, payload)
      .pipe(map((response) => {
        if (response.success && response.token) {
          localStorage.setItem(LocalStorage.token, response.token);
          localStorage.setItem(LocalStorage.role, response.data?.role);
          localStorage.setItem(LocalStorage.empId, response.data?.empId.toString());
          if(response.data.manager)
          localStorage.setItem(LocalStorage.managerId, response.data?.manager.empId.toString());
          this.isLoggedIn.update(() => true);
        }
        return response;
      }));
  }

  getUserToken() {
    return localStorage.getItem(LocalStorage.token);
  }

  getRole(): string | null {
    return localStorage.getItem(LocalStorage.role);
  }

  logout() {
    this.http.post(`${ApiEndpoint.Auth.Logout}`, {}).subscribe(
      (response) => {
        localStorage.removeItem(LocalStorage.token);
        localStorage.removeItem(LocalStorage.role);
        localStorage.removeItem(LocalStorage.empId);
        localStorage.removeItem(LocalStorage.managerId);
        this.isLoggedIn.update(() => false);
        this.router.navigate(['login']);
      });
  }

  userDetails() {
    return this.http.get<User>(
      `${ApiEndpoint.Auth.CurrentUser}`
    );
  }
}
