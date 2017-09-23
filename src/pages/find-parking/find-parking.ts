import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { SingletonProvider } from '../../providers/singleton/singleton';

import { FindEventsPage } from '../find-events/find-events';

declare var google;

@IonicPage()
@Component({
  selector: 'page-find-parking',
  templateUrl: 'find-parking.html',
})
export class FindParkingPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  public filterType : any = "price";

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation : Geolocation, public singleton : SingletonProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindParkingPage');
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((position) => {
      
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeControl: false,
        zoomControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }, (err) => {
      console.log(err);
    });
  }

  openEvents() {
    this.singleton.createModal("FindEventsPage");
  }

}
