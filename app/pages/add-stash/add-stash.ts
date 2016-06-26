import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StashService } from '../../services/stash-service';

/*
  Generated class for the AddStashPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/add-stash/add-stash.html',
  providers: [StashService]
})
export class AddStashPage {
  name = ""
  description = ""

  constructor(private nav: NavController, private stashService: StashService) {

  }

  addStash() {
    this.stashService.add(this.name, this.description).then(() => {
      this.nav.pop();
    }).catch(err => {
      console.log(err);
    });
  }

  
}
