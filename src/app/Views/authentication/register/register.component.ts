import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/Services/auth.service';
import { Router } from '@angular/router';
import { NameValidate } from './validators/name.validator';
import { ValidateEmail2 } from './validators/email.validator';
import { ComparePassword } from './validators/password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  RegisterForm!: FormGroup;
  IsLoading: boolean = false;

  get name() {
    return this.RegisterForm.get('name');
  }

  get email() {
    return this.RegisterForm.get('email');
  }

  get password() {
    return this.RegisterForm.get('password');
  }

  get rePassword() {
    return this.RegisterForm.get('rePassword');
  }

  get phone() {
    return this.RegisterForm.get('phone');
  }

  constructor(
    private _fb: FormBuilder,
    private _AuthService: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.checkLogin();
    this.CreateForm();
  }

  checkLogin() {
    if (this._AuthService.IsLoggedIn()) {
      this._router.navigate(['/blank/pages/home']);
    } else {
      this._router.navigate(['/Auth/Authentication/Register']);
    }
  }

  CreateForm() {
    this.RegisterForm = this._fb.group(
      {
        name: [
          null,
          [Validators.required, Validators.minLength(2), NameValidate],
        ],
        email: [
          null,
          [
            Validators.required,
            Validators.email,
            ValidateEmail2(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?=.*[0-9])[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g
            ),
          ],
        ],
        password: [null, Validators.required],
        rePassword: [null, [Validators.required]],
        phone: [null, [Validators.required]],
      },
      { validators: ComparePassword('password', 'rePassword') }
    );
  }

  OnSubmit(model: FormGroup) {
    this.IsLoading = true;

    this._AuthService.Register(model.value).subscribe({
      next: () => {
        this.IsLoading = false;
        this._router.navigate(['/Auth/Authentication/Login']);
      },
      error: () => {
        this.IsLoading = false;
      },
    });
  }
}
