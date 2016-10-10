import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs';

// firebase/angularfire
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class UserData {
  
  username = '';
  userpwd = '';
  enabletouchid = '';
  appversion = '';
  currentuser;
  userdata;
  housedata;
  profilepicdata;
  userSettings;

  //constructor(public storage: Storage) {

  constructor(public af: AngularFire,) {

    this.userdata = af.database.object('/users');
    this.housedata = af.database.object('/houses');
     
    /*
    this.userdata = firebase.database().ref('/users/');
    this.housedata = firebase.database().ref('/houses/');
    this.profilepicdata = firebase.storage().ref('/profilepics/');
    */

  }

  login(credentials) {
    return new Promise((resolve: () => void, reject: (reason: Error) => void) => {
      this.af.auth.login({email: credentials.username,password: credentials.password})     
      .then((authData) => {
        this.currentuser = authData;
        resolve();
      }).catch(error => {
        reject(error);
      });
    });
  }

  saveLocalStorage(credentials) {
    this.setUsername(credentials.email);
    this.setUserPwd(credentials.password);
  }

  setUsername(username) {
    //this.storage.set('username', username);
  }

  setUserPwd(pwd) {
    //this.storage.set('userpwd', pwd);
  }

  setEnableTouchID(enabletouchid) {
    //this.storage.set('enabletouchid', enabletouchid);
  }

  getUsernameStorage() {
    /*return this.storage.get('username').then((value) => {
      return value;
    });*/
  }

  getPasswordStorage() {
    /*return this.storage.get('userpwd').then((value) => {
      return value;
    });*/
  }

  getEnableTouchIDStorage() {
    /*return this.storage.get('enabletouchid').then((value) => {
      return value;
    });*/
  }

  logout() {
    //return firebase.auth().signOut()
  }

  houseid() {
    //return this.userSettings.houseid;
  }

  getUserData() {
    var snapProfile = this.af.database.object('/users/' + this.currentuser.uid, { preserveSnapshot: true });
    snapProfile.subscribe(snapshot => {
      this.userSettings = snapshot.val();
    })
  }

  getAccountTypes(paramHouseid) {
    return this.housedata.child(paramHouseid + '/memberaccounttypes');
  }

  updateTouchID(ischecked: boolean) {
    this.af.database.object('/users/' + this.currentuser.uid).update({'enabletouchid' : ischecked});
    //console.log(this.currentuser.uid);
    //console.log(this.af.database.object('/user/'));
  }

  updateDefaultBalance(newdefaultbalance: string) {
    //this.userdata.child(firebase.auth().currentUser.uid).update({'defaultbalance' : newdefaultbalance});
  }

  updateDefaultDate(newdefaultdate: string) {
    //this.userdata.child(firebase.auth().currentUser.uid).update({'defaultdate' : newdefaultdate});
  }
   
}