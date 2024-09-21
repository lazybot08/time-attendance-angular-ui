import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { passwordPatternValidator, confirmPasswordValidator } from '../../core/validators/password.validation';
import { dateNotInFuture } from '../../core/validators/date.validator';
import { LayoutComponent } from '../../shared/layout/layout.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, LayoutComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  form: FormGroup;
  authService = inject(AuthService);
  router = inject(Router);

  confirmPasswordValidator: ValidatorFn = (control: AbstractControl) => {
    const formGroup = control.parent as FormGroup;
    if (formGroup) {
      const password = formGroup.get('password')?.value;
      const confirmPassword = control.value;
      return password === confirmPassword ? null : { mismatch: true };
    }
    return null;
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, passwordPatternValidator]),
      confirmPassword: new FormControl('', [Validators.required, confirmPasswordValidator]),
      mobile: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
      birthDate: new FormControl('', [Validators.required, dateNotInFuture()]),
      gender: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      designation: new FormControl('', [Validators.required]),
      department: new FormControl('', [Validators.required]),
      managerId: new FormControl('', [Validators.required]),
      hireDate: new FormControl('', [Validators.required, dateNotInFuture()]),
    }, { validators: confirmPasswordValidator });
  }

  onBlur(controlName: string) {
    const control = this.form.get(controlName);
    if (control) {
      control.markAsTouched();
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.register(this.form.value).subscribe({
        next:(response)=>{
          this.router.navigate(['login']);
        }
      })
    }
  }
}
