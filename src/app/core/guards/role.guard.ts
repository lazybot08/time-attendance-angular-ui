import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
    const userRole = authService.getRole();

    if(userRole === 'ROLE_MANAGER'){
      router.navigate(['manager-dashboard']);
    }else if(userRole === 'ROLE_EMPLOYEE'){
      router.navigate(['employee-dashboard']);
    }else{
      router.navigate(['']);
    }

    return true;
}