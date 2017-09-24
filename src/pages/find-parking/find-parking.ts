import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { SingletonProvider } from '../../providers/singleton/singleton';
import { MapServiceProvider } from '../../providers/map-service/map-service';

import { FindEventsPage } from '../find-events/find-events';

declare var google;

@IonicPage()
@Component({
  selector: 'page-find-parking',
  templateUrl: 'find-parking.html',
})
export class FindParkingPage {

  @ViewChild('map') mapElement : ElementRef;

  public query : any = "";

  public filterType : any = "price";

  public location = {
    name: "",
    lat: 0,
    lng: 0
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public singleton : SingletonProvider, public ms : MapServiceProvider) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindParkingPage');
    
    this.ms.loadMap(this.mapElement);
  }

  onFocusSearch() {
    this.singleton.createModal("LocationPickerPage").then(res => {
      if(res != undefined && res[0] != undefined && res[0].data != undefined) {
        console.log("Received location", res[0].data);
        this.query = res[0].data.place.description;
        this.ms.selectPlace(res[0].data.place).then(res => {
          this.randomizeMarkers(res[0].lat, res[0].lng);
        });
      }
    });
  }

  randomizeMarkers(lat, lng) {
    console.log("Randomizing markers");
    var total = 0;
    for(var i = 0; i < 3; i++) {
      var newLat = (lat + (Math.random() * 0.01));
      var newLng = (lng + (Math.random() * 0.01));
      var title = "Title";
      var content = "$" + (Math.floor((Math.random() * 15.0)) + 5);
      this.ms.createBasicMarker(newLat, newLng, title, content).then(res => {
        this.singleton.createModalParams("PaymentPage", {cost: content});
        console.log(res);
      });
    }
    for(var i = 0; i < 3; i++) {
      newLat = (lat - (Math.random() * 0.01));
      newLng = (lng - (Math.random() * 0.01));
      var title = "Title";
      var content = "$" + (Math.floor((Math.random() * 15.0)) + 5);
      this.ms.createBasicMarker(newLat, newLng, title, content).then(res => {
        this.singleton.createModalParams("PaymentPage", {cost: content});
        console.log(res);
      });
    }
    for(var i = 0; i < 3; i++) {
      newLat = (lat + (Math.random() * 0.01));
      newLng = (lng - (Math.random() * 0.01));
      var title = "Title";
      var content = "$" + (Math.floor((Math.random() * 15.0)) + 5);
      this.ms.createBasicMarker(newLat, newLng, title, content).then(res => {
        this.singleton.createModalParams("PaymentPage", {cost: content});
        console.log(res);
      });
    }
    for(var i = 0; i < 3; i++) {
      newLat = (lat - (Math.random() * 0.01));
      newLng = (lng + (Math.random() * 0.01));
      var title = "Title";
      var content = "$" + (Math.floor((Math.random() * 15.0)) + 5);
      this.ms.createBasicMarker(newLat, newLng, title, content).then(res => {
        this.singleton.createModalParams("PaymentPage", {cost: content});
        console.log(res);
      });
    }
  }

  openEvents() {
    this.singleton.createModal("FindEventsPage").then(res => {

    });
  }

}
