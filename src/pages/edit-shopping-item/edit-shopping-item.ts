import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from 'ionic-angular/components/item/item';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
//import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the EditShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {
  item:Item;
  constructor(public navCtrl: NavController, public navParams: NavParams, private shopping: ShoppingListService,
    //private toast:ToastService
  ) {
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad EditShoppingItemPage');
    console.log(this.navParams.get('item'));

    this.item=this.navParams.get('item');
  }
  saveItem(item){
    this.shopping.editItem(item).then(()=>{
     // this.toast.show(`${item.name} has been saved`);
      this.navCtrl.setRoot('HomePage');
    });
  }
  DeleteItem(item){
    this.shopping.removeItem(item).then(()=>{
      // this.toast.show(`${item.name} has been deleted`);
       this.navCtrl.setRoot('HomePage');
     });
  }

}
