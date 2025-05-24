import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API } from 'src/app/core/constants/api';
import { LoginRequest, LoginResponse } from 'src/app/auth/models/auth.models'; 


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {}

    login(data: LoginRequest): Observable<string> {
        return this.http.post(API.auth.login, data, { responseType: 'text' });
    }

}
