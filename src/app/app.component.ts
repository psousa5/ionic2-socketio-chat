import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { SocketProvider } from "../providers/socket-provider";
import {ChatPage} from "../pages/chat/chat";

@Component({
  templateUrl: 'app.html',
  providers: [SocketProvider]
})
export class MyApp {
  rootPage = ChatPage;
  private socket: any;

  constructor(platform: Platform, private socketProvider: SocketProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.socket = socketProvider.io("http://localhost:3000");

      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
