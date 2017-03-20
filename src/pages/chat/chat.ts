import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
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

  private socketio: any;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public storage: Storage,
    public socket: SocketProvider
  ) {
    socket.io("http://localhost:3000");
    this.socket.socket().on("test-channel:App\\Events\\ChatMessage", function(message){
      // increase the power everytime we load test route
      console.log(message);
    });
  }
}
