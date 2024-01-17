import { Injectable } from '@angular/core';
import { collection, addDoc, getDocs, query, where, DocumentData, QuerySnapshot } from 'firebase/firestore';
import { FirebaseService } from './firebase.service';
import { Annonce } from '../home/announce.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAnnonceService {

  constructor(private firebaseService: FirebaseService) {}

  async ajouterAnnonce(annonce: Annonce): Promise<void> {
    const db = this.firebaseService.getFirestore();
    
    try {
      await addDoc(collection(db, 'announces'), annonce);
      console.log('Announce added successfully');
    } catch (error) {
      console.error('Error adding announce:', error);
    }
  }

  getAnnoncesUtilisateur(user: string): Observable<Annonce[]> {
    const db = this.firebaseService.getFirestore();
    const annoncesQuery = query(collection(db,  'announces'), where('user', '==', user));

    return new Observable<Annonce[]>((observer) => {
      getDocs(annoncesQuery).then((querySnapshot: QuerySnapshot<DocumentData>) => {
        const annonces: Annonce[] = [];
        querySnapshot.forEach((doc) => {
          annonces.push(doc.data() as Annonce);
        });
        observer.next(annonces);
      });
    });
  }

  getToutesAnnonces(): Observable<Annonce[]> {
    const db = this.firebaseService.getFirestore();
    const annoncesQuery = query(collection(db,  'announces'));

    return new Observable<Annonce[]>((observer) => {
      getDocs(annoncesQuery).then((querySnapshot: QuerySnapshot<DocumentData>) => {
        const annonces: Annonce[] = [];
        querySnapshot.forEach((doc) => {
          annonces.push(doc.data() as Annonce);
        });
        observer.next(annonces);
      });
    });
  }
}

