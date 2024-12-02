import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/Services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.checkLogin();
    this.LoginForm = this._fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  checkLogin() {
    if (localStorage.getItem('token') !== null) {
      this._router.navigate(['/blank/pages/home']);
    }
  }

  OnSubmit(model: FormGroup) {
    console.log(model.value);
    this.IsLoading = true;

    this._AuthService.Login(model.value).subscribe({
      next: (res) => {
        if (res.message === 'success') {
          this.IsLoading = false;
          console.log(res);
          this.ShowSuccessMessage();
          // set token in localStorage
          localStorage.setItem('token', res.token);
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
