import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/Services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { IsEmailExist } from './validators/async.validator';
import { EmailService } from '../../../shared/Services/email.service';
import { Token_Key } from '../../../shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  IsLoading: boolean = false;

  get email() {
    return this.LoginForm.get('email');
  }
  get password() {
    return this.LoginForm.get('password');
  }

  constructor(
    private _fb: FormBuilder,
    private _AuthService: AuthService,
    private _router: Router,
    private _emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.checkLogin();
    this.CreateForm();
  }

  checkLogin() {
    if (this._AuthService.IsLoggedIn()) {
      this._router.navigate(['/blank/pages/home']);
    }
  }

  CreateForm() {
    this.LoginForm = this._fb.group({
      email: [
        null,
        {
          validators: [Validators.required, Validators.email],
          asyncValidators: [IsEmailExist(this._emailService)],
          updateOn: 'blur', // Updates and validates on blur event
        },
      ],
      password: [null, Validators.required],
    });
  }

  OnSubmit(model: FormGroup) {
    this.IsLoading = true;

    this._AuthService.Login(model.value).subscribe({
      next: (res) => {
        if (res.message === 'success') {
          this.IsLoading = false;
          this.ShowSuccessMessage();
          // set token in localStorage
          this._AuthService.SaveToken(res.token);
          // decode userData
          this._AuthService.decodeUserData();
          // navigate to home page
          this._router.navigate(['/blank/pages/home']);
        }
      },
      error: (err) => {
        console.log(err);
        this.IsLoading = false;
        this.ShowErrorMessage();
      },
    });
  }

  ShowErrorMessage() {
    Swal.fire({
      title: 'Error!',
      text: 'Error happens!',
      icon: 'error',
      confirmButtonText: 'Ok',
    });
  }
  ShowSuccessMessage() {
    Swal.fire({
      title: 'Success!',
      text: 'Welcome!',
      icon: 'success',
      confirmButtonText: 'Ok',
    });
  }
}
