import { AbstractControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl) => {
    const formGroup = control.parent as FormGroup;
    if (formGroup) {
      const password = formGroup.get('password')?.value;
      const confirmPassword = control.value;
      return password === confirmPassword ? null : { mismatch: true };
    }
    return null;
  };
  
  export const passwordPatternValidator = Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*]).{8,}');