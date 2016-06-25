import {Page, NavController, Modal} from 'ionic-angular';
import {LoginPage} from '../login/login';
/*
  Generated class for the MainPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/main/main.html',
})
export class MainPage {
  constructor(public nav: NavController) {

  }

  emailLogin() {
    const modal = Modal.create(LoginPage);
    this.nav.push(LoginPage);
  }

  facebookLogin() {

  }

  twitterLogin() {

  }
}
