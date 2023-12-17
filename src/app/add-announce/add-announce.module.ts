import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAnnouncePageRoutingModule } from './add-announce-routing.module';

import { AddAnnouncePage } from './add-announce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAnnouncePageRoutingModule
  ],
  declarations: [AddAnnouncePage]
})
export class AddAnnouncePageModule {}
