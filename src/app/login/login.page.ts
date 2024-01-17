//login page
import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  //LoginData to store email, and password data from input
  loginData = { email: '', password: '' };

  constructor(
    //Injection of the AuthService to login
    private authService: AuthService, 
    //Injection of the Router to redirect user
    private router: Router) {}
    
  //Login 
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
  //Redirect to register page
  register() {
    this.router.navigate(['/register']); 
  }
}
