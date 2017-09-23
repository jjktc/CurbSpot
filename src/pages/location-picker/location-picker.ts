import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Searchbar } from 'ionic-angular';

import { MapServiceProvider } from '../../providers/map-service/map-service';

@IonicPage()
@Component({
  selector: 'page-location-picker',
  templateUrl: 'location-picker.html',
})
export class LocationPickerPage {

  @ViewChild('searchbar') searchbar : Searchbar;

  public query : any = "";
  public suggestions = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public vc : ViewController, public ms : MapServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPickerPage');
  }

  ionViewWillEnter() {
    this.searchbar.setFocus();
  }

  searchPlace() {
    this.ms.searchPlace(this.query).then(res => {
      this.suggestions = res[0].suggestions;
    });
  }

  selectPlace(item) {
    this.vc.dismiss({
      place: item
    });
  }

}
