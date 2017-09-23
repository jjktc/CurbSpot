import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ReservationsPage } from '../pages/reservations/reservations';
import { FindParkingPage } from '../pages/find-parking/find-parking';
import { AccountPage } from '../pages/account/account';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { SingletonProvider } from '../providers/singleton/singleton';

@NgModule({
  declarations: [
    MyApp,
    ReservationsPage,
    FindParkingPage,
    AccountPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReservationsPage,
    FindParkingPage,
    AccountPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SingletonProvider
  ]
})
export class AppModule {}
