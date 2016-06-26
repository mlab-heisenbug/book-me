import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';
import {StashService} from '../../services/stash-service';

@Component({
  templateUrl: 'build/pages/contact/contact.html',
  providers: [StashService]
})
export class ContactPage {
  loading = true;
  errorMessage = ""
  stashes = {}

  constructor(private navController: NavController, private stashService: StashService,
    private menu: MenuController) {
  }

  ionViewDidEnter() {
    this.stashService.booked().then(stashes => {
      console.log(stashes.val());
      this.stashes = stashes.val();
      this.loading = false;
    }).catch(err => {
      this.errorMessage = err.message;
      this.loading = false;
    })
  }

  stashKeys() {
    return Object.keys(this.stashes);
  }

  openMenu() {
    this.menu.open();
  }
}
