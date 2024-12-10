import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { EmailService } from '../../../../shared/Services/email.service';
import { Observable, map } from 'rxjs';

export function IsEmailExist(emailService: EmailService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    var email = control.value;
    return emailService
      .CheckEmail(email)
      .pipe(
        map((result: boolean) =>
          result ? { usernameAlreadyExists: true } : null
        )
      );
  };
}
