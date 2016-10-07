import { Component } from '@angular/core';

import { Platform, NavController, ModalController } from 'ionic-angular';
import { AppVersion } from 'ionic-native';

// services
import { UserData } from '../../../providers/user-data';

@Component({
  templateUrl: 'settings.html'
})
export class SettingsPage {

  appversion = '';
  userSettings: any;
  houseid: string;
  imgsrc: string;
  
  constructor(
    public nav: NavController,
    public modalController: ModalController,
    public platform: Platform,
    public userData: UserData) {

    platform.ready().then(() => {
      AppVersion.getVersionNumber().then(ver => {
        this.appversion = ver;
      }).catch(function(error) {
        console.log(error);
      });
    });
  }

  ionViewDidLoad() {
    this.userSettings = this.userData.userSettings;
    console.log('ion-view-did-load here');
  }

  openPersonalProfile() {
    //this.nav.push(PersonalProfilePage, {paramSettings: this.userSettings});
  }

  openAccountTypes() {
    //this.nav.push(AccountTypesPage, {paramHouseid: this.userSettings.houseid});
  }

  openAboutPage() {
    //this.nav.push(AboutPage);
  }

  toggleTouchID(e) {
    this.userData.updateTouchID(e.checked)
      .then(() => {
        console.log('success');
      }        
    )
    .catch(
      (error) => {          
        console.log('error');
      }
    );
  }

  changeDefaltBalance() {
    /*let modal = this.modalController.create(PickDefaultBalancePage, {paramBalance: this.userSettings.defaultbalance});
    modal.present(modal);
    modal.onDidDismiss((data: any) => {
      if (data) {
        this.userData.updateDefaultBalance(data);
      }
    });*/
  }

  changeDefaltDate() {
    /*let modal = this.modalController.create(PickDefaultDatePage, {paramDate: this.userSettings.defaultdate});
    modal.present(modal);
    modal.onDidDismiss((data: any) => {
      if (data) {
        this.userData.updateDefaultDate(data);
      }
    });*/
  }

}
