//register page
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { createUserWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  //registerData to store email, and password data from input
  registerData = { email: '', password: '' };
  //errorMessage to export the error msg on html
  errorMessage: string = '';
  constructor(
    //Injection of the FirebaseService to use the add user function createUserWithEmailAndPassword
    private firebaseService: FirebaseService, 
    //Injection of the Router to redirect to /login 
    private router: Router) {}

    //register
  async register() {
    try {
      const auth = this.firebaseService.getAuthInstance();
      const { email, password } = this.registerData;
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Registration successful');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Registration error :', error);
      this.errorMessage = 'Registration failed :'+error;
    }
  }
}
