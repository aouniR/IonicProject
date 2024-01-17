//Add announce page
import { Component, OnInit } from '@angular/core';
import { FirebaseAnnonceService } from '../services/firebase-annonce.service';
import { Annonce } from '../home/announce.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-announce',
  templateUrl: './add-announce.page.html',
  styleUrls: ['./add-announce.page.scss'],
})
//The AddAnnouncePage implements OnInit to initialize the page form on each request  
export class AddAnnouncePage implements OnInit {
  announceData: Annonce = {
    id: '',
    title: '',
    description: '',
    category: '',
    user: '',
  };

  constructor(
    //Injection of the FirebaseAnnonceService to use the add function of the new announce to firestore
    private annonceService: FirebaseAnnonceService,
    //Injection of the AuthService to add UserEmail to the announce Form
    private authService: AuthService,
    //Injection of the Router to redirect to /home after adding the announce
    private router: Router
  ) {}

  // Initializing the page form on each request
  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm): void {
    if (form) {
      form.resetForm();
    }
  }

  //The addAnnounce function to add a new announce to firestore
  addAnnounce(form: NgForm): void {
    if (form.valid) {
      const newAnnounce: Annonce = {
        id: Date.now().toString(),
        title: this.announceData.title,
        description: this.announceData.description,
        category: this.announceData.category,
        user: this.authService.UserEmail(),
      };
      this.annonceService.ajouterAnnonce(newAnnounce);
      console.log('Announcement added successfully:', newAnnounce);
      this.resetForm(form);
      this.router.navigate(['/home']);
    }
  }
}
