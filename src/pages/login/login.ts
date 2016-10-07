import { Component } from '@angular/core';

import { AlertController, NavController } from 'ionic-angular';

import { Page1 } from '../../pages/page1/page1';

// services
import { UserData } from '../../providers/user-data';

@Component({
  templateUrl: 'login.html',
  selector: 'page-login'
})
export class LoginPage {
  
  login: {username?: string, password?: string} = {};
  submitted = false;
  //public fireAuth: any;

  constructor(
    public navCtrl: NavController,
    public alertController: AlertController,
    public userData: UserData) {

    //this.fireAuth = firebase.auth();
    this.login.username = 'guni@test.com';
    this.login.password = '111111';

   }

  onLogin(form) {
    this.submitted = true;
    if (form.valid) {
      this.userData.loginwithemailandpassword(this.login)
        .then(() => {
          this.LoginSuccess();
        }        
      )
      .catch(
        (error) => {          
          this.LoginError(error);
        }
      );
    }
  }

  LoginSuccess(): void {
    this.userData.getUserData().on('value', (data) => {
      this.userData.userSettings = data.val(); 
      this.navCtrl.setRoot(Page1, {}, {animate: true, direction: 'forward'});
    });
  }

  LoginError(error): void {
    let alert = this.alertController.create({
      title: 'Login Failed',
      subTitle: 'Please check your email and/or password and try again',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            //do handler stuff here
          }
        }
      ]
    });
    alert.present();
  }

}