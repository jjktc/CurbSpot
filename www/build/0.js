webpackJsonp([0],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentPageModule = (function () {
    function PaymentPageModule() {
    }
    return PaymentPageModule;
}());
PaymentPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */]),
        ],
    })
], PaymentPageModule);

//# sourceMappingURL=payment.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_map_service_map_service__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentPage = (function () {
    function PaymentPage(navCtrl, navParams, ms, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ms = ms;
        this.viewCtrl = viewCtrl;
        this.address = "";
        this.lat = 0.0;
        this.lng = 0.0;
        this.cost = "";
        this.address = navParams.data.address;
        this.lat = navParams.data.lat;
        this.lng = navParams.data.lng;
        this.cost = navParams.data.cost;
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
        this.ms.streetView(this.panoElement, this.lat, this.lng);
    };
    PaymentPage.prototype.ionViewWillEnter = function () {
    };
    return PaymentPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('pano'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], PaymentPage.prototype, "panoElement", void 0);
PaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payment',template:/*ion-inline-start:"/Users/helios/Documents/Helios/Ionic/CurbSpot/src/pages/payment/payment.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Reserve</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-left (click)="viewCtrl.dismiss()">\n          <ion-icon name="arrow-back"></ion-icon>\n          Cancel\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header text-wrap>\n      {{address}}\n      <h2>{{cost}}</h2>\n    </ion-card-header>\n\n  </ion-card>\n\n  <div #pano id="pano">\n    <ion-spinner color="primary" name="dots"></ion-spinner>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar no-padding>\n    <button no-padding ion-button icon-left large full color="secondary">\n      <ion-icon showWhen="ios" name="logo-apple"></ion-icon>\n      <ion-icon showWhen="android" name="logo-android"></ion-icon>\n      Reserve ({{cost}})\n    </button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/helios/Documents/Helios/Ionic/CurbSpot/src/pages/payment/payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_map_service_map_service__["a" /* MapServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], PaymentPage);

//# sourceMappingURL=payment.js.map

/***/ })

});
//# sourceMappingURL=0.js.map