import { Component } from '@angular/core';

import { ReservationsPage } from '../reservations/reservations';
import { FindParkingPage } from '../find-parking/find-parking';
import { AccountPage } from '../account/account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FindParkingPage;
  tab2Root = ReservationsPage;
  tab3Root = AccountPage;

  constructor() {

  }
}
