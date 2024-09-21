import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../shared/layout/layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, LayoutComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup;
  errorMessage: string | null = null;
  authService = inject(AuthService);
  router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  onBlur(controlName: string) {
    const control = this.form.get(controlName);
    if (control) {
      control.markAsTouched();
      this.clearErrorMessage();
    }
  }

  onChange() {
    this.clearErrorMessage();
  }

  clearErrorMessage() {
    this.errorMessage = null;
  }

  onSubmit(){
    if(this.form.valid){
      this.authService.login(this.form.value).subscribe({
        next:(response)=>{
          this.router.navigate(['']);
        },
        error: (error) => {
          console.error('Error logging in:', error);
          this.errorMessage = 'Incorrect email or password. Please try again.';
          this.form.reset();
        }
      })
    }
  }
}