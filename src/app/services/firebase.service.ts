import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { environment } from '../../environments/environment';
import { getFirestore, Firestore } from 'firebase/firestore';
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private firebaseConfig = environment.firebaseConfig;

  private firebaseApp = initializeApp(this.firebaseConfig);
  private authInstance: Auth = getAuth(this.firebaseApp);
  private firestoreInstance: Firestore = getFirestore(this.firebaseApp);
  getAuthInstance(): Auth {
    return this.authInstance;
  }

  getFirebaseApp() {
    return this.firebaseApp;
  }
  getFirestore(): Firestore {
    return this.firestoreInstance;
  }
}
