import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Injectable()
export class MapServiceProvider {

  public acService : any;
  public placesService : any;
  public geocoder : any;

  public suggestions = [];
  public location = {
    name: "",
    lat: 0,
    lng: 0
  }
  public map : any;

  constructor(public http: Http, public geolocation : Geolocation) {
    console.log('Hello MapServiceProvider Provider');
  }

  selectPlace(place) {
    return new Promise(resolve => {
      this.placesService.getDetails({placeId: place.place_id}, (details) => {
        this.location.name = details.name;
        this.location.lat = details.geometry.location.lat();
        this.location.lng = details.geometry.location.lng();
  
        this.map.setCenter({lat: this.location.lat, lng: this.location.lng}); 
        resolve([{lat: this.location.lat, lng: this.location.lng}]);
      });
    })
  }

  searchPlace(query) {
    return new Promise(resolve => {
      if(query.length > 0) {
        
        let config = {
          types: ['geocode'],
          input: query
        }
  
        this.acService.getPlacePredictions(config, (predictions, status) => {
  
          if(status == google.maps.places.PlacesServiceStatus.OK && predictions){
  
            this.suggestions = [];
  
            predictions.forEach((prediction) => {
                this.suggestions.push(prediction);
            });
            resolve([{suggestions: this.suggestions}]);
          }
  
        });
      }
    });
  }

  myFunction() {
    console.log("test");
  }

  createBasicMarker(lat, lng, title, cost) {
    return new Promise(resolve => {
      this.createMarker(lat, lng, title, 
        "<span id='myid' style='font-weight: bold'>" + cost + "</span>"
      ).then(res => {
        resolve(res);
      })
    })
  }

  createMarker(lat, lng, title, content) {
    return new Promise(resolve => {
      var info = new google.maps.InfoWindow({
        content: content
      });
      var marker = new google.maps.Marker({
        position: {lat: lat, lng: lng},
        map: this.map,
        title: title,
        //icon: "http://wfarm3.dataknet.com/static/resources/icons/set28/58aac1c.png"
        animation:google.maps.Animation.DROP
      });
      info.open(this.map, marker);
      marker.addListener("click", function() {
        info.open(this.map, marker);
        resolve([{marker: title}]);
      });
    });
  }

  geocodeLatLng(lat, lng) {
    return new Promise(resolve => {
      var latlng = {lat: lat, lng: lng};
      this.geocoder.geocode({'location': latlng}, function(results, status) {
        if (status === 'OK') {
          if (results[0]) {
            console.log(results[0].formatted_address)
            resolve([{address: results[0].formatted_address}]);
          } else {
            resolve([{address: ""}]);
          }
        } else {
          resolve([{address: ""}]);
        }
      });
    });
  }

  streetView(panoElement, lat, lng) {
    var location = {lat: lat, lng: lng};
    let latLng = new google.maps.LatLng(lat, lng);
    var panorama = new google.maps.StreetViewPanorama(
      panoElement.nativeElement, {
        position: location,
        pov: {
          heading: 34,
          pitch: 0
        },
        zoom: 1
    });
  }

  loadMap(mapElement) {
    return new Promise(resolve => {
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
  
        this.map = new google.maps.Map(mapElement.nativeElement, mapOptions);
  
        //this.createMarker(this.location.lat, this.location.lng, "title", "content");
  
        this.acService = new google.maps.places.AutocompleteService();
        this.placesService = new google.maps.places.PlacesService(this.map);
        this.geocoder = new google.maps.Geocoder;
        resolve();
      }, (err) => {
        console.log(err);
      });
    });
  }

}
