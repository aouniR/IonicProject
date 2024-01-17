import { Component, OnInit } from '@angular/core';
import { FirebaseAnnonceService } from '../services/firebase-annonce.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'; 
import { Annonce } from './announce.model';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  announces: Annonce[] = [];

  constructor(private annonceService: FirebaseAnnonceService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.annonceService.getToutesAnnonces().subscribe((data) => {
      this.announces = data;
    });
  }

  AddAnnounce(){
    this.router.navigate(['/add-announce']);
  }
  Leave(){
    this.authService.logout();
    console.log('user logged out');
    this.router.navigate(['/login']);
  }
}
