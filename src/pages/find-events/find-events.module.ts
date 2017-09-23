import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindEventsPage } from './find-events';

@NgModule({
  declarations: [
    FindEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(FindEventsPage),
  ],
})
export class FindEventsPageModule {}
