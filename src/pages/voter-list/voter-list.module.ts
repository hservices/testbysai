import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VoterListPage } from './voter-list';

@NgModule({
  declarations: [
    VoterListPage,
  ],
  imports: [
    IonicPageModule.forChild(VoterListPage),
  ],
})
export class VoterListPageModule {}
