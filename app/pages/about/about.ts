import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';
import {SamplePage} from '../sample/sample';
import {AddStashPage} from '../add-stash/add-stash';
import {StashService} from '../../services/stash-service';

@Component({
  templateUrl: 'build/pages/about/about.html',
  providers: [StashService]
})
export class AboutPage {
  loading = true;
  errorMessage = ""
  stashes = {}

  constructor(private nav: NavController, private stashService: StashService,
    private menu: MenuController) {

  }

  ionViewDidEnter() {
    this.stashService.stashes().then(stashes => {
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

  addStash() {
    this.nav.push(AddStashPage);
  }

  openMenu() {
    this.menu.open();
  }
}
