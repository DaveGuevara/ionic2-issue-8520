import { Injectable } from '@angular/core';

// firebase
declare var firebase;

@Injectable()
export class UserData {
  
  username = '';
  userpwd = '';
  enabletouchid = '';
  appversion = '';
  userdata;
  housedata;
  profilepicdata;
  userSettings;

  //constructor(public storage: Storage) {

  constructor() {

    this.userdata = firebase.database().ref('/users/');
    this.housedata = firebase.database().ref('/houses/');
    this.profilepicdata = firebase.storage().ref('/profilepics/');

  }

  loginwithemailandpassword(credentials) {
    return new Promise((resolve: () => void, reject: (reason: Error) => void) => {
      firebase.auth().signInWithEmailAndPassword(credentials.username, credentials.password)
      .then(function() {
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

  uid() {
    return firebase.auth().currentUser.uid;
  }

  currentUser() {
    return firebase.auth().currentUser
  }

  currentUserEmail() {
    return firebase.auth().currentUser.email;
  }

  logout() {
    return firebase.auth().signOut()
  }

  houseid() {
    return this.userSettings.houseid;
  }

  getUserData() {
    return this.userdata.child(firebase.auth().currentUser.uid);
  }

  getAccountTypes(paramHouseid) {
    return this.housedata.child(paramHouseid + '/memberaccounttypes');
  }

  updateTouchID(ischecked: boolean) {
    return new Promise((resolve: () => void, reject: (reason: Error) => void) => {
      this.userdata.child(firebase.auth().currentUser.uid).update({'enabletouchid' : ischecked})
      .then(function() {
        resolve();
      }).catch(error => {
        reject(error);
      });
    });
  }

  updateDefaultBalance(newdefaultbalance: string) {
    this.userdata.child(firebase.auth().currentUser.uid).update({'defaultbalance' : newdefaultbalance});
  }

  updateDefaultDate(newdefaultdate: string) {
    this.userdata.child(firebase.auth().currentUser.uid).update({'defaultdate' : newdefaultdate});
  }

  updateName(newname: string) {
    this.userdata.child(firebase.auth().currentUser.uid).update({'fullname' : newname});
  }

  updateEmail(newEmail: string) {
    return new Promise((resolve: () => void, reject: (reason: Error) => void) => {
      let user = firebase.auth().currentUser;
      user.updateEmail(newEmail)
      .then(function() {
        resolve();
      }).catch(error => {
        reject(error);
      });
    });
  }

  updatePassword(newPassword: string) {    
    return new Promise((resolve: () => void, reject: (reason: Error) => void) => {
      let user = firebase.auth().currentUser;
      user.updatePassword(newPassword)
      .then(function() {
        resolve();
      }).catch(function(error) {
        reject(error);
      });
    });
  }

  deleteData(houseid) {
    //
    // Delete ALL user data
    this.housedata.child(houseid).remove();
    this.userdata.child(firebase.auth().currentUser.uid).remove();
  }

  deleteUser() {
    return new Promise((resolve: () => void, reject: (reason: Error) => void) => {
      let user = firebase.auth().currentUser;
      user.delete()
      .then(function() {
        resolve();
      }).catch(function(error) {
        reject(error);
      });
    });
  }

  savePicture(pic) {
    this.profilepicdata.child(firebase.auth().currentUser.uid).child('profilepicture.png')
      .put(pic).then((savedpicture) => {
        this.userdata.child(firebase.auth().currentUser.uid).update({'profilepic' : savedpicture.downloadURL});
      });
  }

  updateEmailNode(newemail) {
    this.userdata.child(firebase.auth().currentUser.uid).update({'email' : newemail});
  }

  updateAccountType(houseid: string, item) {
    this.housedata.child(houseid + '/memberaccounttypes/' + item.id).update(item);
  }
   
}