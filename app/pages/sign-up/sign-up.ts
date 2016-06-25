import {Page, NavController, Alert, Events} from 'ionic-angular';
import {UserService} from '../../services/user-service';
import {TabsPage} from '../tabs/tabs';

/*
  Generated class for the SignUpPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/sign-up/sign-up.html',
  providers: [UserService]
})
export class SignUpPage {
  email: string = "";
  password: string = "";
  confirm_password: string = "";
  name: string = "";

  constructor(public nav: NavController,
    private userService: UserService, private events: Events) {
  }

  signUp() {
    this.userService.createUser(this.email, this.password).then((user) => {
      if (user) {
        console.log('Successfully registered');
        this.nav.setRoot(TabsPage);
      } else {
        console.log('Couldn\'t register');
      }
    })
  }
}
