// src/app/services/annonce.service.ts
import { Injectable } from '@angular/core';
import { Annonce } from '../home/announce.model';
import { FirebaseAnnonceService } from './firebase-annonce.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnnonceService {
  constructor(private firebaseAnnonceService: FirebaseAnnonceService) {}

  ajouterAnnonce(annonce: Annonce): Promise<void> {
    return this.firebaseAnnonceService.ajouterAnnonce(annonce);
  }

  getAnnoncesUtilisateur(user: string): Observable<Annonce[]> {
    return this.firebaseAnnonceService.getAnnoncesUtilisateur(user);
  }

  getToutesAnnonces(): Observable<Annonce[]> {
    return this.firebaseAnnonceService.getToutesAnnonces();
  }
}
