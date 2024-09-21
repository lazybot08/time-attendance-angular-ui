import { AbstractControl, ValidatorFn } from '@angular/forms';

export function dateNotInFuture(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value && new Date(control.value) > new Date()) {
      return { 'futureDate': true };
    }
    return null;
  };
}
