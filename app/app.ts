import {Component, ViewChild, PLATFORM_DIRECTIVES} from '@angular/core';
import {Platform, ionicBootstrap, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {MainPage} from './pages/main/main';
import {SplashPage} from './pages/splash/splash';
import {ContentLoading} from './components/content-loading/content-loading';
import {LoadingModal} from './components/loading-modal/loading-modal';
import {UserService} from './services/user-service';

@Component({
  templateUrl: './build/app.html',
  providers: [UserService]
})
export class MyApp {

  private rootPage:any;
  @ViewChild(Nav) nav;
  @ViewChild(LoadingModal) loading;

  constructor(private platform:Platform, userService: UserService) {
    this.rootPage = SplashPage;

    userService.user().then( (user) => {
      if (user != null) {
        this.rootPage = TabsPage;
      } else {
        this.rootPage = MainPage;
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp,
  [{ provide: PLATFORM_DIRECTIVES, useValue: [LoadingModal, ContentLoading], multi: true
    }])
