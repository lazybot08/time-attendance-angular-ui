import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../core/model/common.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.css'
})
export class AccountDetailsComponent implements OnInit{
  authService = inject(AuthService);
  user!: User;

  ngOnInit(): void {
    this.authService.userDetails().subscribe({
      next: (response) => {
        this.user = response;
      },
    });
  }
}
