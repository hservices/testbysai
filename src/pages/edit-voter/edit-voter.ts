import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VoterListService } from '../../services/voter-list/voter-list.service';
import { Voter } from '../../models/voter/voter.model';
/**
 * Generated class for the EditVoterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-voter',
  templateUrl: 'edit-voter.html',
})
export class EditVoterPage {
  voter:Voter;
  constructor(public navCtrl: NavController, public navParams: NavParams,private voterSvc:VoterListService) {
  }

  ionViewWillLoad() {

    console.log(this.navParams.get('voter'));
    this.voter=this.navParams.get('voter');

  }
  saveVoter(voter){
        this.voterSvc.editVoter(voter).then(()=>{
        this.navCtrl.setRoot('VoterListPage');
     });
  }

}
