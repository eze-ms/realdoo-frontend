import { API } from 'src/app/core/constants/api';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { LoginRequest } from '../models/auth.models';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;
  errorMessage: string | null = null;
  successMessage: string | null = null;


  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.loginForm.setValue({
      email: 'test@demo.com',
      password: '123456'
    });
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

    onSubmit(): void {
    if (this.loginForm.invalid) return;

    const data: LoginRequest = this.loginForm.value;

    this.authService.login(data).subscribe({
      next: (token: string) => {
        localStorage.setItem('token', token);
        this.errorMessage = null;
        this.successMessage = 'Inicio de sesión exitoso.';
      },
      error: (err) => {
        this.successMessage = null;
        this.errorMessage = 'Credenciales incorrectas o error de conexión.';
      }
    });
  }

  onSsoLogin(): void {
    window.location.href = API.auth.sso;
  }

}
