import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-find-events',
  templateUrl: 'find-events.html',
})
export class FindEventsPage {

  public events = [
    {
      title: "Lollapalooza",
      subtitle: "21 spots",
      image: "http://edmchicago.com/wp-content/uploads/2015/12/TC-Lollapalooza.jpg"
    },
    {
      title: "Comic-Con",
      subtitle: "16 spots",
      image: "http://sdccsurvivalguide.com/wp-content/uploads/2016/07/sdccsg-02-floor.jpg"
    },
    {
      title: "Chicago Bulls",
      subtitle: "19 spots",
      image: "http://mediad.publicbroadcasting.net/p/wamc/files/201505/clevelandcavaliers.jpg"
    },
    {
      title: "event 4",
      subtitle: "subtitle",
      image: ""
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindEventsPage');
  }

}
