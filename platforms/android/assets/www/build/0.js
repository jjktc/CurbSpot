webpackJsonp([0],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindEventsPageModule", function() { return FindEventsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__find_events__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FindEventsPageModule = (function () {
    function FindEventsPageModule() {
    }
    return FindEventsPageModule;
}());
FindEventsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__find_events__["a" /* FindEventsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__find_events__["a" /* FindEventsPage */]),
        ],
    })
], FindEventsPageModule);

//# sourceMappingURL=find-events.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindEventsPage; });
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


var FindEventsPage = (function () {
    function FindEventsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = [
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
                title: "event 3",
                subtitle: "subtitle",
                image: ""
            },
            {
                title: "event 4",
                subtitle: "subtitle",
                image: ""
            }
        ];
    }
    FindEventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FindEventsPage');
    };
    return FindEventsPage;
}());
FindEventsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-find-events',template:/*ion-inline-start:"/Users/helios/Documents/Helios/Ionic/CurbSpot/src/pages/find-events/find-events.html"*/'<ion-header>\n  \n    <ion-navbar>\n      <ion-title>Find Events</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n    <ion-card *ngFor="let event of events" [style.backgroundImage]="\'url(\' + event.image + \')\'">\n      <!--<img src={{event.image}}/>-->\n      <div class="card-title">{{event.title}}</div>\n      <div class="card-subtitle">{{event.subtitle}}</div>\n    </ion-card>\n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/helios/Documents/Helios/Ionic/CurbSpot/src/pages/find-events/find-events.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], FindEventsPage);

//# sourceMappingURL=find-events.js.map

/***/ })

});
//# sourceMappingURL=0.js.map