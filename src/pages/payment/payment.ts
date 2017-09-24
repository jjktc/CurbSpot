import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { MapServiceProvider } from '../../providers/map-service/map-service';

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  @ViewChild('pano') panoElement : ElementRef;

  public address = "";
  public lat = 0.0;
  public lng = 0.0;

  public cost = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public ms : MapServiceProvider, public viewCtrl : ViewController) {
    this.address = navParams.data.address;
    this.lat = navParams.data.lat;
    this.lng = navParams.data.lng;
    this.cost = navParams.data.cost;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
    this.ms.streetView(this.panoElement, this.lat, this.lng);
  }

  ionViewWillEnter() {

  }

}
