import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {User} from "../../app/User";
import {Storage} from "@ionic/storage";
import {SocketProvider} from "../../providers/socket-provider";

/*
  Generated class for the Chat page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public storage: Storage,
    public socket: SocketProvider
  ) {}
}
