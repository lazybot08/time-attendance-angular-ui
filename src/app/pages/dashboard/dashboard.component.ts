import {
  Component,
  effect,
  inject,
  Injector,
  OnInit,
  signal,
} from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../core/model/common.model';
import { AccountDetailsComponent } from '../../components/account-details/account-details.component';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    LayoutComponent,
    AccountDetailsComponent,
    RouterModule,
    CommonModule,
    RouterOutlet,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  authService = inject(AuthService);
  injector = inject(Injector);
  isLoggedIn = false;
  user!: User;
  userRole!: string | null;

  ngOnInit(): void {
    effect(
      () => {
        this.isLoggedIn = this.authService.isLoggedIn();
      },
      { injector: this.injector }
    );
    this.authService.userDetails().subscribe({
      next: (response) => {
        this.user = response;
      },
    });
    this.userRole = this.authService.getRole();
  }
}
