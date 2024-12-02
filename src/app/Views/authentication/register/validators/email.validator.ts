import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// export function ValidateEmail(
//   control: AbstractControl
// ): ValidationErrors | null {
//   if (
//     control?.value?.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?=.*[0-9])[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g)
//   ) {
//     return null;
//   } else {
//     return { InvalidEmail: true };
//   }
// }

export function ValidateEmail2(pattern: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control?.value?.match(pattern)) {
      return null;
    } else {
      return { InvalidEmail: true };
    }
  };
}
