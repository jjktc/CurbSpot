import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform, AlertController, ToastController, LoadingController, ModalController } from 'ionic-angular';

import { DatePicker } from '@ionic-native/date-picker';

@Injectable()
export class SingletonProvider {

  public loader : any;

  constructor(public http: Http, public platform : Platform, public ac : AlertController, public tc : ToastController, public lc : LoadingController, public mc : ModalController, public datePicker : DatePicker) {
    console.log('Hello SingletonProvider Provider');
  }

  //sorting algorithm
  partition(array, compareNumbers, left : number, right : number) {
    var newArray = array;
    if(array.length == 1) {
      return newArray;
    } else {
      var p : number = -1;
      var i : number = -1
      
      this.pivot(array, left, right);
      p = left;
      i = left + 1;
      for(var j : number = left + 1; j <= right; j++) {
        if(compareNumbers[j] < compareNumbers[p]) {
          var a = newArray[j];
          var b = newArray[i];
          newArray[i] = a;
          newArray[j] = b;
          i++;
        }
      }

      var a = newArray[p];
      var b = newArray[i - 1];
      newArray[p] = b;
      newArray[i - 1] = a;

      if(i - 2 - left >= 1) {
        newArray = this.partition(newArray, compareNumbers, left, i - 2);
      }
      if(right - i >= 1) {
        newArray = this.partition(newArray, compareNumbers, i, right);
      }

    }
    return newArray;
  }

  pivot(array, left : number, right : number) {
    var a = array[left];
    var b = array[right];
    array[left] = b;
    array[right] = a;
  }

  //returns an array that shows which radio button to check
  produceRadioStates(options, current) {
    var is = [];
    for(var i = 0; i < options.length; i++) {
      if(current = options[i]) {
        is.push(true);
      } else {
        is.push(false);
      }
    }
  }

  //sorts an array alphabetically and returns the result
  sortAlpha(input : string[]) : string[] {
    var sorted : string[] = input.slice();
    sorted.sort(function(a, b) {
      var aL = a.toLowerCase();
      var bL = b.toLowerCase();
      return aL < bL ? -1 : aL > bL ? 1 : 0;
    });
    return sorted;
  }

  createDatePicker() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  createDateAlert(aTitle, aValue) {
    return new Promise(resolve => {
      let alert = this.ac.create({
        title: 'Due Date',
        inputs: [
          {
            name: 'Date',
            type: 'date',
            value: aValue
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
              resolve([""]);
            }
          },
          {
            text: 'Save',
            handler: data => {
              console.log("Returned result", data);
              resolve([data.Date])
            }
          }
        ]
      });
      alert.present();
    });
  }

  createDateRangeAlert(aTitle, aValue1, aValue2) {
    return new Promise(resolve => {
      let alert = this.ac.create({
        title: 'Due Date',
        inputs: [
          {
            name: 'Date1',
            type: 'date',
            value: aValue1
          },
          {
            name: 'Date2',
            type: 'date',
            value: aValue1
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
              resolve([undefined, undefined]);
            }
          },
          {
            text: 'Save',
            handler: data => {
              console.log("Returned result", data);
              resolve([data.Date1, data.Date2])
            }
          }
        ]
      });
      alert.present();
    });
  }

  createPromptAlert(aTitle, aName, aPlaceholder, aType) {
    return new Promise(resolve => {
      let alert = this.ac.create({
        title: aTitle,
        inputs: [
          {
            name: aName,
            placeholder: aPlaceholder,
            type: aType
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
              resolve([""]);
            }
          },
          {
            text: 'OK',
            handler: data => {
              console.log("Returned result", data[aName]);
              resolve([data[aName]]);
            }
          }
        ]
      });
      alert.present();
    });
  }

  createRadioAlert(title, optionTitles, optionValues) {
    return new Promise(resolve => {
      var aInputs = [];
      for(var i = 0; i < optionTitles.length; i++) {
        aInputs.push({
          name: optionTitles[i],
          label: optionTitles[i],
          value: optionValues[i],
          type: "radio"
        });
      }
      let alert = this.ac.create({
        title: title,
        inputs: aInputs,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'OK',
            handler: data => {
              console.log("User submitted alert", data);
              resolve([data]);
            }
          }
        ]
      });
      alert.present();
    });
  }

  //sends an alert with the desired specifications
  sendAlert(title : string, subtitle : string, buttons) {
    let alert = this.ac.create({
        title: title,
        subTitle: subtitle,
        buttons: buttons
    });
    alert.present();
  }

  sendToast(sText : string) {
    let toast = this.tc.create({
      message: sText,
      duration: 3500,
      showCloseButton: true,
      position: "bottom"
    });
    toast.present();
  }

  //creates a spinner object with the desired message
  createLoader(message) {
    this.loader = this.lc.create({
      spinner: "dots",
      content: message
    });
    this.loader.present();
  }

  //destroys any active spinner object
  destroyLoader() {
    if(this.loader) {
      this.loader.dismiss();
    }
  }

  createModal(content) {
    return new Promise(resolve => {
      let m = this.mc.create(content);
      m.present();
      m.onDidDismiss(data => {
        resolve([{data: data}]);
      });
    });
  }

  createModalParams(content, params) {
    return new Promise(resolve => {
      let m = this.mc.create(content, params);
      m.present();
      m.onDidDismiss(data => {
        resolve([{data: data}]);
      });
    });
  }

  capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  contains(s, c) : boolean {
    var con : boolean = false;
    for(var a = 0; a < s.length; a++) {
      var emoji : number = s[a].search(/[\uD800-\uDFFF]./);
      if(emoji >= 0) {
        con = true;  
      }
      for(var i = 0; i < c.length; i++) {
        if(s[a] != undefined && c[i] != undefined) {
          if(s[a].indexOf(c[i]) >= 0) {
            con = true;
          }
        }
      }
    }
    return con;
  }

}
