import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {UserService} from '../../services/user-service';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [UserService]
})
export class HomePage {
  user_email = "";

  constructor(private navController: NavController,
    private userService: UserService) {
      this.userService.user().then((user: any) => {
        this.user_email = user.email;
      }).catch((err) => {
        console.log(err);
      });
  }
}
