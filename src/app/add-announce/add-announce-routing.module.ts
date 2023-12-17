import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAnnouncePage } from './add-announce.page';

const routes: Routes = [
  {
    path: '',
    component: AddAnnouncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAnnouncePageRoutingModule {}
