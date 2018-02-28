import { Component } from '@angular/core';
import { NavController,IonicPage,ToastController } from 'ionic-angular';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item/item.model';
import { Change } from '@firebase/database/dist/esm/src/core/view/Change';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActionSheetController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingList$ :Observable<Item[]>;

  constructor(public actionSheetCtrl: ActionSheetController,public navCtrl: NavController, private shopping:ShoppingListService,private afAuth:AngularFireAuth,private tost:ToastController) {
      this.shoppingList$=this.shopping.getShoppingList().snapshotChanges().map(
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
  /*Displaying welcome messages ends*/
  /*displaying slide-up-menu-- presently not yyet using in this app:harsha*/
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Edit',
          role: 'destructive',
          handler: () => {
            console.log('Edit clicked');
          }
        },{
          text: 'Delete',
          handler: () => {
            console.log('Delete clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  /*displaying slide-up-menu*/
}
