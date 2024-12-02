import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function ComparePassword(
  Fcontrol: string,
  Scontrol: string
): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    var pass = formGroup.get(Fcontrol);
    var confirmPass = formGroup.get(Scontrol);

    if (pass?.dirty && confirmPass?.dirty && pass.value !== confirmPass.value) {
      confirmPass.setErrors({ NotMatched: true });
    }
    return null;
  };
}

// export function ComparePassword2(
//   formGroup: FormGroup
// ): ValidationErrors | null {
//   var pass = formGroup.get('password');
//   var confirmPass = formGroup.get('rePassword');

//   if (pass?.dirty && confirmPass?.dirty && pass.value !== confirmPass.value) {
//     confirmPass.setErrors({ NotMatched: true });
//   }
//   return null;
// }
