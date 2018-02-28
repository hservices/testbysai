import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user/user.model';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  user={} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }
  async register(user:User){
    try{
      const result=await this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
      console.log('Result:'+result);
      if(result){
        this.navCtrl.setRoot('LoginPage');
      }
    }
   catch(e){
     console.error(e);
   }
  }

}
