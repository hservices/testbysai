import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

import { Change } from '@firebase/database/dist/esm/src/core/view/Change';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActionSheetController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { VoterListService } from '../../services/voter-list/voter-list.service';
import { Voter } from '../../models/voter/voter.model';

/**
 * Generated class for the VoterListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-voter-list',
  templateUrl: 'voter-list.html',
})
export class VoterListPage {

  voterList$ :Observable<Voter[]>;
  constructor(
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    private voter:VoterListService,
    private afAuth:AngularFireAuth,
    private tost:ToastController) {

      this.voterList$=this.voter.getVoterList().snapshotChanges().map(
        Change=>{
           return Change.map(c=>({
             key:c.payload.key, ...c.payload.val()
           })).reverse();
           
        }
      )
  }
/*Displaying welcome messages in toaster after login:harsha*/
ionViewWillLoad() {
  this.afAuth.authState.subscribe(data =>{
    if(data && data.email && data.uid){
    this.tost.create({
      message:`welcome to PMS,${data.email}`,
      duration:3000
    }).present();
   }
   else{
   }
  });
 }

 deleteVoter(voter){
  this.voter.removeVoter(voter).then(()=>{
    // this.toast.show(`${item.name} has been deleted`);
     this.navCtrl.setRoot('VoterListPage');
   });
}
 /*Displaying welcome messages ends*/
 
}
