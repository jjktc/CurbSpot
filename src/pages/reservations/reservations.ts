import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reservations',
  templateUrl: 'reservations.html',
})
export class ReservationsPage {

  public reservationType : any = "upcoming";

  public history = [
    {
      address: "1 Oakwood Avenue, Los Angeles, CA",
      startDate: "09/14/2017",
      startTime: "09:30 am",
      endDate: "09/14/2017",
      endTime: "02:30 pm"
    }
  ];

  public upcoming = [
    {
      address: "1 Oakwood Avenue, Los Angeles, CA",
      startDate: "09/23/2017",
      startTime: "09:30 am",
      endDate: "09/23/2017",
      endTime: "02:30 pm"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationsPage');
  }

}
