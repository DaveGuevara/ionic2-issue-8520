#### Short description of the problem:

When I tap on an ion-toggle component on the Settings page on my app I get redirected to the rootpage (AccountListPage). This should not happen.

#### What behavior are you expecting?

When I tap on an ion-toggle component I expect to stay on the Settings page and not be redirected to another page

**Animated GIF Demostrating Issue**
![moneyleash_issue_01](https://cloud.githubusercontent.com/assets/6364855/19134694/964a8710-8b2d-11e6-8632-b23929b39a8d.gif)


**Steps to reproduce:**
1. Git clone the following repo: [MoneyLeash2](https://github.com/gigocabrera/MoneyLeash2)
2. run `npm install`
3. run `ionic serve`

**settings.html**
```
<ion-toggle [(ngModel)]="userSettings.enabletouchid" (click)="toggleTouchID()" checked="{{ userSettings?.enabletouchid }}"></ion-toggle>
```
[Complete markup for settings.html](https://github.com/gigocabrera/MoneyLeash2/blob/master/src/pages/mysettings/settings/settings.html#L55)

 
**settings.ts**
```
toggleTouchID() {
    console.log(this.userSettings.enabletouchid);
    this.userData.updateTouchID(this.userSettings.enabletouchid);
    this.userData.setEnableTouchID(this.userSettings.enabletouchid);
}
```
[Complete code for settings.ts](https://github.com/gigocabrera/MoneyLeash2/blob/master/src/pages/mysettings/settings/settings.ts#L59)


**user-data.ts**
```
updateTouchID(ischecked: boolean): any {
    this.userdata.child(firebase.auth().currentUser.uid).update({'enabletouchid' : ischecked});
}
```
[Complete code for user-data.ts](https://github.com/gigocabrera/MoneyLeash2/blob/master/src/providers/user-data.ts#L101)



**Other information:** 
No console errors are shown
 

**Which Ionic Version?**  2.x

**Run `ionic info` from terminal/cmd prompt:**

Your system information:

Cordova CLI: 6.3.0
Gulp version:  CLI version 3.9.0
Gulp local:
Ionic Framework Version: 2.0.0-rc.0
Ionic CLI Version: 2.1.0
Ionic App Lib Version: 2.1.0-beta.1
OS: Windows 7 SP1
Node Version: v6.7.0
