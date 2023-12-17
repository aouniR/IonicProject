import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../services/annonce.service';
import { Router } from '@angular/router'; 
import { Annonce } from './announce.model';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  announces: Annonce[]|any ;

  constructor(private annonceService: AnnonceService, private router: Router) {}

  ngOnInit() {
    this.announces = this.annonceService.getToutesAnnonces();
  }

  AddAnnounce(){
    this.router.navigate(['/add-announce']);
  }
}
