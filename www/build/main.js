webpackJsonp([4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindParkingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_singleton_singleton__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FindParkingPage = (function () {
    function FindParkingPage(navCtrl, navParams, geolocation, singleton) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.singleton = singleton;
        this.query = "";
        this.filterType = "price";
        this.suggestions = [];
        this.bestPrediction = "Search";
        this.location = {
            name: "",
            lat: 0,
            lng: 0
        };
    }
    FindParkingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FindParkingPage');
        this.loadMap();
    };
    FindParkingPage.prototype.selectPlace = function (place) {
        var _this = this;
        this.placesService.getDetails({ placeId: place.place_id }, function (details) {
            _this.location.name = details.name;
            _this.location.lat = details.geometry.location.lat();
            _this.location.lng = details.geometry.location.lng();
            _this.map.setCenter({ lat: _this.location.lat, lng: _this.location.lng });
        });
    };
    FindParkingPage.prototype.searchPlace = function () {
        var _this = this;
        if (this.query.length > 0) {
            var config = {
                types: ['geocode'],
                input: this.query
            };
            this.acService.getPlacePredictions(config, function (predictions, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK && predictions) {
                    _this.suggestions = [];
                    predictions.forEach(function (prediction) {
                        _this.suggestions.push(prediction);
                    });
                    if (_this.suggestions.length >= 1) {
                        _this.bestPrediction = _this.suggestions[0].description;
                        _this.selectPlace(_this.suggestions[0]);
                    }
                    else {
                        _this.bestPrediction = "";
                    }
                }
            });
        }
    };
    FindParkingPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            _this.location.lat = position.coords.latitude;
            _this.location.lng = position.coords.longitude;
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeControl: false,
                zoomControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.acService = new google.maps.places.AutocompleteService();
            _this.placesService = new google.maps.places.PlacesService(_this.map);
        }, function (err) {
            console.log(err);
        });
    };
    FindParkingPage.prototype.openEvents = function () {
        this.singleton.createModal("FindEventsPage");
    };
    return FindParkingPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], FindParkingPage.prototype, "mapElement", void 0);
FindParkingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-find-parking',template:/*ion-inline-start:"/Users/helios/Documents/Helios/Ionic/CurbSpot/src/pages/find-parking/find-parking.html"*/'<ion-header>\n  \n    <ion-navbar>\n      <ion-title>Find Parking</ion-title>\n  \n      <ion-buttons end>\n  \n      <button ion-button (click)="openEvents()">Events</button>\n      </ion-buttons>\n    </ion-navbar>\n  \n    <ion-toolbar>\n      <ion-searchbar [(ngModel)]="query" (ionInput)="searchPlace()">\n        \n      </ion-searchbar>\n    </ion-toolbar>\n    <ion-toolbar>\n      <ion-segment [(ngModel)]="filterType">\n        <ion-segment-button value="price">\n          Price\n        </ion-segment-button>\n        <ion-segment-button value="duration">\n          Duration\n        </ion-segment-button>\n        <ion-segment-button value="radius">\n          Radius\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n    <ion-toolbar [ngSwitch]="filterType">\n      <div *ngSwitchCase="\'price\'">\n        <ion-range min="5" max="50" step="5" snaps="true">\n          <ion-label range-left>\n            $5\n          </ion-label>\n          <ion-label range-right>\n            $50\n          </ion-label>\n        </ion-range>\n      </div>\n      <div *ngSwitchCase="\'duration\'">\n        <ion-range min="1" max="24" step="1" snaps="true">\n          <ion-label range-left>\n            1hr\n          </ion-label>\n          <ion-label range-right>\n            24hr\n          </ion-label>\n        </ion-range>\n      </div>\n      <div *ngSwitchCase="\'radius\'">\n        radius\n      </div>\n    </ion-toolbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n    <div #map id="map">\n      <ion-spinner></ion-spinner>\n    </div>\n    <ion-fab top right edge>\n      <button ion-fab mini>\n        <ion-icon name="md-arrow-round-forward"></ion-icon>\n      </button>\n    </ion-fab>\n  </ion-content>\n  '/*ion-inline-end:"/Users/helios/Documents/Helios/Ionic/CurbSpot/src/pages/find-parking/find-parking.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__providers_singleton_singleton__["a" /* SingletonProvider */]])
], FindParkingPage);

//# sourceMappingURL=find-parking.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = (function () {
    function AccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
    };
    return AccountPage;
}());
AccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"/Users/helios/Documents/Helios/Ionic/CurbSpot/src/pages/account/account.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list>\n    <ion-list-header color="light">\n      Personal Information\n    </ion-list-header>\n    <button ion-item>\n      First Name\n      <ion-note item-end>\n        John\n      </ion-note>\n    </button>\n    <button ion-item>\n      Last Name\n      <ion-note item-end>\n        Doe\n      </ion-note>\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/helios/Documents/Helios/Ionic/CurbSpot/src/pages/account/account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		271,
		3
	],
	"../pages/find-events/find-events.module": [
		269,
		0
	],
	"../pages/find-parking/find-parking.module": [
		270,
		2
	],
	"../pages/reservations/reservations.module": [
		268,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingletonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SingletonProvider = (function () {
    function SingletonProvider(http, platform, ac, tc, lc, mc) {
        this.http = http;
        this.platform = platform;
        this.ac = ac;
        this.tc = tc;
        this.lc = lc;
        this.mc = mc;
        console.log('Hello SingletonProvider Provider');
    }
    //sorting algorithm
    SingletonProvider.prototype.partition = function (array, compareNumbers, left, right) {
        var newArray = array;
        if (array.length == 1) {
            return newArray;
        }
        else {
            var p = -1;
            var i = -1;
            this.pivot(array, left, right);
            p = left;
            i = left + 1;
            for (var j = left + 1; j <= right; j++) {
                if (compareNumbers[j] < compareNumbers[p]) {
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
            if (i - 2 - left >= 1) {
                newArray = this.partition(newArray, compareNumbers, left, i - 2);
            }
            if (right - i >= 1) {
                newArray = this.partition(newArray, compareNumbers, i, right);
            }
        }
        return newArray;
    };
    SingletonProvider.prototype.pivot = function (array, left, right) {
        var a = array[left];
        var b = array[right];
        array[left] = b;
        array[right] = a;
    };
    //returns an array that shows which radio button to check
    SingletonProvider.prototype.produceRadioStates = function (options, current) {
        var is = [];
        for (var i = 0; i < options.length; i++) {
            if (current = options[i]) {
                is.push(true);
            }
            else {
                is.push(false);
            }
        }
    };
    //sorts an array alphabetically and returns the result
    SingletonProvider.prototype.sortAlpha = function (input) {
        var sorted = input.slice();
        sorted.sort(function (a, b) {
            var aL = a.toLowerCase();
            var bL = b.toLowerCase();
            return aL < bL ? -1 : aL > bL ? 1 : 0;
        });
        return sorted;
    };
    SingletonProvider.prototype.createDateAlert = function (aTitle, aValue) {
        var _this = this;
        return new Promise(function (resolve) {
            var alert = _this.ac.create({
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
                        handler: function (data) {
                            console.log('Cancel clicked');
                            resolve([""]);
                        }
                    },
                    {
                        text: 'Save',
                        handler: function (data) {
                            console.log("Returned result", data);
                            resolve([data.Date]);
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    SingletonProvider.prototype.createDateRangeAlert = function (aTitle, aValue1, aValue2) {
        var _this = this;
        return new Promise(function (resolve) {
            var alert = _this.ac.create({
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
                        handler: function (data) {
                            console.log('Cancel clicked');
                            resolve([undefined, undefined]);
                        }
                    },
                    {
                        text: 'Save',
                        handler: function (data) {
                            console.log("Returned result", data);
                            resolve([data.Date1, data.Date2]);
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    SingletonProvider.prototype.createPromptAlert = function (aTitle, aName, aPlaceholder, aType) {
        var _this = this;
        return new Promise(function (resolve) {
            var alert = _this.ac.create({
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
                        handler: function (data) {
                            console.log('Cancel clicked');
                            resolve([""]);
                        }
                    },
                    {
                        text: 'OK',
                        handler: function (data) {
                            console.log("Returned result", data[aName]);
                            resolve([data[aName]]);
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    SingletonProvider.prototype.createRadioAlert = function (title, optionTitles, optionValues) {
        var _this = this;
        return new Promise(function (resolve) {
            var aInputs = [];
            for (var i = 0; i < optionTitles.length; i++) {
                aInputs.push({
                    name: optionTitles[i],
                    label: optionTitles[i],
                    value: optionValues[i],
                    type: "radio"
                });
            }
            var alert = _this.ac.create({
                title: title,
                inputs: aInputs,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function (data) {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'OK',
                        handler: function (data) {
                            console.log("User submitted alert", data);
                            resolve([data]);
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    //sends an alert with the desired specifications
    SingletonProvider.prototype.sendAlert = function (title, subtitle, buttons) {
        var alert = this.ac.create({
            title: title,
            subTitle: subtitle,
            buttons: buttons
        });
        alert.present();
    };
    SingletonProvider.prototype.sendToast = function (sText) {
        var toast = this.tc.create({
            message: sText,
            duration: 3500,
            showCloseButton: true,
            position: "bottom"
        });
        toast.present();
    };
    //creates a spinner object with the desired message
    SingletonProvider.prototype.createLoader = function (message) {
        this.loader = this.lc.create({
            content: message
        });
        this.loader.present();
    };
    //destroys any active spinner object
    SingletonProvider.prototype.destroyLoader = function () {
        if (this.loader) {
            this.loader.dismiss();
        }
    };
    SingletonProvider.prototype.createModal = function (content) {
        var m = this.mc.create(content);
        m.present();
    };
    SingletonProvider.prototype.capitalizeFirstLetter = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    SingletonProvider.prototype.contains = function (s, c) {
        var con = false;
        for (var a = 0; a < s.length; a++) {
            var emoji = s[a].search(/[\uD800-\uDFFF]./);
            if (emoji >= 0) {
                con = true;
            }
            for (var i = 0; i < c.length; i++) {
                if (s[a] != undefined && c[i] != undefined) {
                    if (s[a].indexOf(c[i]) >= 0) {
                        con = true;
                    }
                }
            }
        }
        return con;
    };
    return SingletonProvider;
}());
SingletonProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ModalController */]])
], SingletonProvider);

//# sourceMappingURL=singleton.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reservations_reservations__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__find_parking_find_parking__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_account__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__find_parking_find_parking__["a" /* FindParkingPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__reservations_reservations__["a" /* ReservationsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__account_account__["a" /* AccountPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/helios/Documents/Helios/Ionic/CurbSpot/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex="0">\n  <ion-tab [root]="tab1Root" tabTitle="Find Parking" tabIcon="md-car"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Reservations" tabIcon="md-bookmarks"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Account" tabIcon="md-contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/helios/Documents/Helios/Ionic/CurbSpot/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_reservations_reservations__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_find_parking_find_parking__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_account_account__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_singleton_singleton__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_reservations_reservations__["a" /* ReservationsPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_find_parking_find_parking__["a" /* FindParkingPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/reservations/reservations.module#ReservationsPageModule', name: 'ReservationsPage', segment: 'reservations', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/find-events/find-events.module#FindEventsPageModule', name: 'FindEventsPage', segment: 'find-events', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/find-parking/find-parking.module#FindParkingPageModule', name: 'FindParkingPage', segment: 'find-parking', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_reservations_reservations__["a" /* ReservationsPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_find_parking_find_parking__["a" /* FindParkingPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__providers_singleton_singleton__["a" /* SingletonProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/helios/Documents/Helios/Ionic/CurbSpot/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/helios/Documents/Helios/Ionic/CurbSpot/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReservationsPage = (function () {
    function ReservationsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reservations = [
            {
                address: "1 Oakwood Avenue, Los Angeles, CA",
                startDate: "09/23/2017",
                startTime: "09:30 am",
                endDate: "09/23/2017",
                endTime: "02:30 pm"
            }
        ];
    }
    ReservationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservationsPage');
    };
    return ReservationsPage;
}());
ReservationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reservations',template:/*ion-inline-start:"/Users/helios/Documents/Helios/Ionic/CurbSpot/src/pages/reservations/reservations.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Reservations</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let reservation of reservations">\n    <ion-item>\n      <ion-icon name="ios-information-circle-outline" item-start large></ion-icon>\n      <h2>{{reservation.startTime}} - {{reservation.endTime}}</h2>\n      <p text-wrap>{{reservation.address}}</p>\n    </ion-item>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/helios/Documents/Helios/Ionic/CurbSpot/src/pages/reservations/reservations.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ReservationsPage);

//# sourceMappingURL=reservations.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map