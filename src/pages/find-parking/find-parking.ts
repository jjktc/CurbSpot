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

  public query : any = "";

  public filterType : any = "price";

  public acService : any;
  public placesService : any;
  public suggestions = [];
  public bestPrediction = "Search";

  public location = {
    name: "",
    lat: 0,
    lng: 0
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation : Geolocation, public singleton : SingletonProvider) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindParkingPage');
    this.loadMap();
  }

  selectPlace(place) {
    this.placesService.getDetails({placeId: place.place_id}, (details) => {
        this.location.name = details.name;
        this.location.lat = details.geometry.location.lat();
        this.location.lng = details.geometry.location.lng();

        this.map.setCenter({lat: this.location.lat, lng: this.location.lng}); 
    });
  }

  searchPlace() {
    if(this.query.length > 0) {
      
      let config = {
          types: ['geocode'],
          input: this.query
      }

      this.acService.getPlacePredictions(config, (predictions, status) => {

          if(status == google.maps.places.PlacesServiceStatus.OK && predictions){

              this.suggestions = [];

              predictions.forEach((prediction) => {
                  this.suggestions.push(prediction);
              });
              if(this.suggestions.length >= 1) {
                this.bestPrediction = this.suggestions[0].description;
              } else {
                this.bestPrediction = "";
              }
              
          }

      });
    }
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((position) => {
      this.location.lat = position.coords.latitude;
      this.location.lng = position.coords.longitude;
      
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeControl: false,
        zoomControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.acService = new google.maps.places.AutocompleteService();
      this.placesService = new google.maps.places.PlacesService(this.map);
    }, (err) => {
      console.log(err);
    });
  }

  openEvents() {
    this.singleton.createModal("FindEventsPage");
  }

}
