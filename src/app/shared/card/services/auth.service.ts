import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  id?: string;
  idToken?: string;
  name?: string;
  photoUrl?: string;
  provider?: string;
}

interface Credential{
  email: string,
  password:string
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  apiURL = environment.baseURL;
  constructor(private http: HttpClient) {}

  googleRegister(user: User) {
    return this.http.post(`${this.apiURL}/auth/google-register`, {
      firstName: user.firstName,
      lastName:user.lastName,
      email: user.email,
    } );
  }

  goggleLogin(user:User){
    return this.http.post(`${this.apiURL}/auth/google-login`, {
      firstName: user.firstName,
      lastName:user.lastName,
      email: user.email,
    } );
  }

  registerUser(userData: User) {
    return this.http.post(`${this.apiURL}/auth/register`, userData);
  }

  loginUser(credential: Credential) {
    return this.http.post(`${this.apiURL}/auth/login`, credential);   
  }

  forgotPassword(email: string) {
    return this.http.post(`${this.apiURL}/auth/forgot`, {
      email
    });
  }

  otpVerify(otp: string) {
    return this.http.post(`${this.apiURL}otp`, {
      otp
    })
  }

  resetPassword(otp: string | null, password: string) {
    return this.http.post(`${this.apiURL}reset`, {
      otp,
      password
    })
  }

}
