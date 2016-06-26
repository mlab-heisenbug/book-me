import {Injectable} from '@angular/core';
import {UserService} from './user-service';
declare var firebase;

@Injectable()
export class StashService {
  constructor(private userService: UserService) {

  }

  stashes() {
    return this.userService.user().then((user: any) => {
      console.log( user.email.split('.').join(','))
      return firebase.database().ref('stash/' + user.email.split('.').join(',')).orderByChild('status').equalTo('Available').once('value');
    })
  }

  booked() {
    return this.userService.user().then((user: any) => {
      console.log( user.email.split('.').join(','))
      return firebase.database().ref('stash/' + user.email.split('.').join(',')).orderByChild('status').equalTo('BOOKED').once('value');
    })
  }

  add(name, description) {
    return this.userService.user().then((user: any) => {
      console.log( user.email.split('.').join(','))
      return firebase.database().ref('stash/' + user.email.split('.').join(',')).push({
        description: description,
        name: name,
        img_name: ""
      });
    })


  }
}
