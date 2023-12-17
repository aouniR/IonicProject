import { Injectable } from '@angular/core';
import { collection, addDoc, getDocs, query, where, DocumentData, QuerySnapshot } from 'firebase/firestore';
import { FirebaseService } from './firebase.service';
import { Annonce } from '../home/announce.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAnnonceService {
  private readonly ANNONCES_COLLECTION_NAME = 'announces';

  constructor(private firebaseService: FirebaseService) {}

  async ajouterAnnonce(annonce: Annonce): Promise<void> {
    const db = this.firebaseService.getFirestore();
    await addDoc(collection(db, this.ANNONCES_COLLECTION_NAME), annonce);
  }

  getAnnoncesUtilisateur(user: string): Observable<Annonce[]> {
    const db = this.firebaseService.getFirestore();
    const annoncesQuery = query(collection(db, this.ANNONCES_COLLECTION_NAME), where('user', '==', user));

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
    const annoncesQuery = query(collection(db, this.ANNONCES_COLLECTION_NAME));

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

