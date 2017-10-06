import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SingletonProvider } from '../../providers/singleton/singleton';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  VIEW_REGISTER = 0;
  VIEW_LOGIN = 1;
  view = this.VIEW_REGISTER;

  constructor(public navCtrl: NavController, public navParams: NavParams, public singleton : SingletonProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  onClickSwitch(view) {
    this.view = view;
  }

  onClickLogin() {

  }

  onClickRegister() {

  }

}
