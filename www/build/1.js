webpackJsonp([1],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPickerPageModule", function() { return LocationPickerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_picker__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LocationPickerPageModule = (function () {
    function LocationPickerPageModule() {
    }
    return LocationPickerPageModule;
}());
LocationPickerPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__location_picker__["a" /* LocationPickerPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__location_picker__["a" /* LocationPickerPage */]),
        ],
    })
], LocationPickerPageModule);

//# sourceMappingURL=location-picker.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPickerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_map_service_map_service__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationPickerPage = (function () {
    function LocationPickerPage(navCtrl, navParams, vc, ms) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vc = vc;
        this.ms = ms;
        this.query = "";
        this.suggestions = [];
    }
    LocationPickerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationPickerPage');
    };
    LocationPickerPage.prototype.ionViewWillEnter = function () {
        this.searchbar.setFocus();
    };
    LocationPickerPage.prototype.searchPlace = function () {
        var _this = this;
        this.ms.searchPlace(this.query).then(function (res) {
            _this.suggestions = res[0].suggestions;
        });
    };
    LocationPickerPage.prototype.selectPlace = function (item) {
        this.vc.dismiss({
            place: item
        });
    };
    return LocationPickerPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('searchbar'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Searchbar */])
], LocationPickerPage.prototype, "searchbar", void 0);
LocationPickerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-location-picker',template:/*ion-inline-start:"/Users/helios/Documents/Helios/Ionic/CurbSpot/src/pages/location-picker/location-picker.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Search</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-left (click)="vc.dismiss()">\n        <ion-icon name="arrow-back"></ion-icon>  \n        Cancel\n      </button>\n  </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-searchbar [(ngModel)]="query" (ionInput)="searchPlace()" #searchbar>\n      \n    </ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <button ion-item *ngFor="let item of suggestions" (click)="selectPlace(item)">\n      {{item.description}}\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/helios/Documents/Helios/Ionic/CurbSpot/src/pages/location-picker/location-picker.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_map_service_map_service__["a" /* MapServiceProvider */]])
], LocationPickerPage);

//# sourceMappingURL=location-picker.js.map

/***/ })

});
//# sourceMappingURL=1.js.map