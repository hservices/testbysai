import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Voter } from '../../models/voter/voter.model';
import { VoterListService } from '../../services/voter-list/voter-list.service';

/**
 * Generated class for the AddVoterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-voter',
  templateUrl: 'add-voter.html',
})
export class AddVoterPage {
    voter:Voter={
      voterName: '',
      voterID:'',
      adharID: '',
      voterRole:''
    }

    constructor(public navCtrl: NavController, public navParams: NavParams,private voterList:VoterListService) {
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad AddVoterPage');
    }
    addVoter(voter:Voter){
      this.voterList.addVoter(voter).then(ref =>{
        console.log(ref.key);
      // this.toast.show(`${item.name} Added`);
        this.navCtrl.setRoot("VoterListPage",ref.key)
    })

  }
}
