import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { SettingsPage } from '../pages/mysettings/settings/settings';
import { LoginPage } from '../pages/login/login';
import { TutorialPage } from '../pages/tutorial/tutorial';

import { UserData } from '../providers/user-data';

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
    IonicModule.forRoot(MyApp)
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
