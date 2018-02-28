import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditVoterPage } from './edit-voter';

@NgModule({
  declarations: [
    EditVoterPage,
  ],
  imports: [
    IonicPageModule.forChild(EditVoterPage),
  ],
})
export class EditVoterPageModule {}
