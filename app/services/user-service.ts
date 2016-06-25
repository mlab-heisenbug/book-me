import {Injectable} from '@angular/core';
import {Events} from 'ionic-angular';
import {LoadingModal} from '../components/loading-modal/loading-modal';
declare var firebase;

@Injectable()
export class UserService {
  constructor(private events: Events) {

  }

  private compileError(error) {
      this.events.publish('error', {
        title: "Registration Failed",
        message: error.message,
        error: error
      });

      this.hideLoading();
  }

  private showLoading() {
    this.events.publish('show_loading', null);
  }

  private hideLoading() {
    this.events.publish('hide_loading', null);
  }

  createUser(email, password) {
    this.showLoading();

    return firebase.auth().createUserWithEmailAndPassword(email, password).
      catch((error) => { this.compileError(error); }).
        then((user) => {
          this.hideLoading();

          return user;
        });
  }

  signIn(email, password) {
    this.showLoading();

    return firebase.auth().signInWithEmailAndPassword(email, password).
      catch((error) => this.compileError(error)).
        then((user) => {
          this.hideLoading();

          return user;
        });
  }

  user() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(function(user) {
        resolve(user);
      });
    });
  }

  signOut() {
    firebase.auth().signOut();
  }
}
