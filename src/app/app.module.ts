import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { SettingsPage } from '../pages/mysettings/settings/settings';
import { LoginPage } from '../pages/login/login';
import { TutorialPage } from '../pages/tutorial/tutorial';

import { UserData } from '../providers/user-data';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

// YOUR SETTINGS GOES HERE!
export const firebaseConfig = {
  apiKey: "AIzaSyAjiJc9cXvd3bzl-aW0wbQC6sajr6RH5hg",
  authDomain: "brilliant-inferno-1044.firebaseapp.com",
  databaseURL: "https://brilliant-inferno-1044.firebaseio.com",
  storageBucket: "brilliant-inferno-1044.appspot.com",
  messagingSenderId: "1097950001655"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    SettingsPage,
    LoginPage,
    TutorialPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    SettingsPage,
    LoginPage,
    TutorialPage
  ],
  providers: [UserData]
})
export class AppModule {}
