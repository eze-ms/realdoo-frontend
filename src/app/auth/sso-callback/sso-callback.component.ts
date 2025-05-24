import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/core/constants/api';

@Component({
  selector: 'app-sso-callback',
  templateUrl: './sso-callback.component.html',
  styleUrls: ['./sso-callback.component.scss']
})
export class SsoCallbackComponent implements OnInit {
  message = 'Procesando inicio de sesión...';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.queryParamMap.get('code');

    if (!code) {
      this.message = 'Código SSO no proporcionado.';
      return;
    }

    this.http.get(API.auth.ssoCallback + `?code=${code}`, { responseType: 'text' }).subscribe({
      next: (token: string) => {
        localStorage.setItem('token', token);
        this.message = 'Inicio de sesión exitoso con SSO.';
        // (opcional) redirigir
        // this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.message = 'Error al procesar el inicio de sesión con SSO.';
      }
    });
  }
}
