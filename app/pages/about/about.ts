import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SamplePage} from '../sample/sample';

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  constructor(private navController: NavController) {
    
  }

  showSample() {
    this.navController.push(SamplePage);
  }

}
