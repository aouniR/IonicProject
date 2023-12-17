import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  loginData = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  updateEmail(event: any) {
    this.loginData.email = event.target.value;
  }

  updatePassword(event: any) {
    this.loginData.password = event.target.value;
  }
  async login() {
    try {
      const { email, password } = this.loginData;
      await this.authService.login(email, password);
      console.log('Login successful');
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Login error', error);
    }
  }
  register() {
    this.router.navigate(['/register']); 
  }
}
