import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddVoterPage } from './add-voter';

@NgModule({
  declarations: [
    AddVoterPage,
  ],
  imports: [
    IonicPageModule.forChild(AddVoterPage),
  ],
})
export class AddVoterPageModule {}
