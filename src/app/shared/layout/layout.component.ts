import { Component, effect, inject, Injector, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { User } from '../../core/model/common.model';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{
  authService = inject(AuthService);
  injector = inject(Injector);
  isLoggedIn = false;
  @Input() user: User | undefined;

  ngOnInit(): void {
      effect(() => {
        this.isLoggedIn = this.authService.isLoggedIn();
      }, {injector: this.injector})

      this.authService.userDetails().subscribe({
        next: (response) => {
          this.user = response;
        }
      })
  }

  logout(){
    this.authService.logout();
  }
}
