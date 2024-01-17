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
export class AddAnnouncePage implements OnInit {
  announceData: Annonce = {
    id: '',
    title: '',
    description: '',
    category: '',
    user: '',
  };

  constructor(
    private annonceService: FirebaseAnnonceService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm): void {
    if (form) {
      form.resetForm();
    }
  }

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
