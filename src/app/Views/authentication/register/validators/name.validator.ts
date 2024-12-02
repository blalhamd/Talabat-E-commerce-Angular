import { AbstractControl, ValidationErrors } from '@angular/forms';

export function NameValidate(
  control: AbstractControl
): ValidationErrors | null {
  if (control?.value?.match(/[0-9]/g)) {
    return { InvalidName: true };
  } else {
    return null;
  }
}
