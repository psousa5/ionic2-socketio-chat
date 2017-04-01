import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {Http, Response} from "@angular/http";
import {MessengerPage} from "../messenger/messenger";
import * as io from 'socket.io-client';
import {User} from "../../app/User";

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
  private currentUser: User;
  public users: any = [];
  private socket: any;
  private unreadMessages: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public http: Http
  ) {}

  ngOnInit() {
    this.socket = io('http://localhost:3000');

    this.login();

    this.socket.on('whisper', (message) => {
      this.unreadMessages.push(message);
      //console.log(this.unreadMessages);
    });

    this.socket.on('users', (users) => {
      this.users = users;
      let index = this.users.indexOf(this.currentUser.username, 0);
      if (index > -1) {
        this.users.splice(index, 1);
      }
    });
  }

  public login(){
    let name = this.generateRandomName();
    this.currentUser = new User(name, this.socket.id);
    this.socket.emit('login', name);
  }

  public openChat(username: string){
    this.navCtrl.push(MessengerPage, {
      sender: this.currentUser.username,
      receiver: username,
      socket: this.socket
    });
  }

  private generateRandomName(): string{
    return Math.random().toString(36).substring(7);
  }
}
