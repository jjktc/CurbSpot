import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  public cost = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cost = navParams.data.cost;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  ionViewWillEnter() {

  }

}
