// src/app/add-announce/add-announce.page.ts
import { Component } from '@angular/core';
import { AnnonceService } from '../services/annonce.service';
import { Annonce } from '../home/announce.model';

@Component({
  selector: 'app-add-announce',
  templateUrl: './add-announce.page.html',
  styleUrls: ['./add-announce.page.scss'],
})
export class AddAnnouncePage {
  announceData: Annonce = {
    id: '',
    title: '',
    description: '',
    categorie: '',
    user: '',
  };

  constructor(private annonceService: AnnonceService) {}

  addAnnounce() {

    const newAnnounce: Annonce = {
      id: Date.now().toString(), 
      title: this.announceData.title,
      description: this.announceData.description,
      categorie: this.announceData.categorie,
      user: this.announceData.user,
    };

    this.annonceService.ajouterAnnonce(newAnnounce);


    this.announceData = {
      id: '',
      title: '',
      description: '',
      categorie: '',
      user: '',
    };

    console.log('Announcement added successfully:', newAnnounce);
  }
}
