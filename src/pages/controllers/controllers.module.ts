import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ControllersPage } from './controllers';

@NgModule({
  declarations: [
    ControllersPage,
  ],
  imports: [
    IonicPageModule.forChild(ControllersPage),
  ],
})
export class ControllersPageModule {}
