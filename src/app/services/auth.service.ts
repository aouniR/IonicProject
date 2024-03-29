// auth.service
import { Injectable } from '@angular/core';
import { Auth, UserCredential, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authInstance: Auth;
  private readonly AUTH_KEY = 'authenticated';
  private  readonly USER_EMAIL ='';
  constructor(private firebaseService: FirebaseService) {
    this.authInstance = this.firebaseService.getAuthInstance();
    this.checkAuthState();
  }

  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.authInstance, email, password)
      .then((userCredential) => {
        this.saveAuthState();
        localStorage.setItem(this.USER_EMAIL, userCredential.user.email ?? 'NIL');
        return userCredential;
      });
  }

  logout(){
      this.removeAuthState();
  }

  isAuthenticatedUser(): boolean {
    this.checkAuthState();
    return localStorage.getItem(this.AUTH_KEY) === 'true';
  }

  UserEmail():string {
    return localStorage.getItem(this.USER_EMAIL) ?? "NIL";
  }
  

  // Save authentication state to local storage
  private saveAuthState(): void {
    localStorage.setItem(this.AUTH_KEY, 'true');
  }

  // Remove authentication state from local storage
  private removeAuthState(): void {
    localStorage.removeItem(this.AUTH_KEY);
  }

  // Check if user is authenticated based on local storage
  private checkAuthState(): void {
    const isAuthenticated = localStorage.getItem(this.AUTH_KEY) === 'true';

    if (isAuthenticated) {
      onAuthStateChanged(this.authInstance, (user) => {
        if (user) {
          this.saveAuthState();
        } else {
          this.removeAuthState();
        }
      });
    }
  }
}
