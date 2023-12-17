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
  
  registerData = { email: '', password: '' };

  constructor(private firebaseService: FirebaseService, private router: Router) {}

  updateEmail(event: any) {
    this.registerData.email = event.target.value;
  }

  updatePassword(event: any) {
    this.registerData.password = event.target.value;
  }

  async register() {
    try {
      const auth = this.firebaseService.getAuthInstance();
      const { email, password } = this.registerData;
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Registration successful');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Registration error', error);
    }
  }
}
