import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import {UserService} from '../../services/user-service';
import {SignUpPage} from '../sign-up/sign-up';
import {TabsPage} from '../tabs/tabs';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
  providers: [UserService]
})
export class LoginPage {
  email = "";
  password = "";

  constructor(private nav: NavController, private userService: UserService,
    private platform: Platform) {
      console.log('test');
    }

    signUp() {
      this.nav.push(SignUpPage);
    }

    signIn() {
      this.userService.signIn(this.email, this.password).then((user) => {
        console.log(user);
        if (user == null) {
          console.log('Login failed');
        } else {
          this.nav.setRoot(TabsPage);
        }
      });
    }
}
