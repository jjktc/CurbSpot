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
import { DatePicker } from '@ionic-native/date-picker';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { SingletonProvider } from '../providers/singleton/singleton';
import { MapServiceProvider } from '../providers/map-service/map-service';
import { UserServiceProvider } from '../providers/user-service/user-service';

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
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SingletonProvider,
    MapServiceProvider,
    UserServiceProvider
  ]
})
export class AppModule {}
