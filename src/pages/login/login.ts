import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SocketProvider} from "../../providers/socket-provider";

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private socket: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public io: SocketProvider) {}

  login(username: string){
    if(username.length >= 2){
      this.io.socket().emit('login', username);
    }
  }

}
