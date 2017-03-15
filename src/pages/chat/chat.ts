import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import * as io from 'socket.io-client';
import {User} from "../../app/User";
import {Storage} from "@ionic/storage";

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

  private socket = io("http://localhost:3000");
  private user: User = new User();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public storage: Storage
  ) {
    this.isLoggedIn();
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad ChatPage');
  }

  sendUsername(){
    if(this.user.nickname.length > 3){
      this.login();
    }else{
      let toast = this.toastCtrl.create({
        message: "Nickname zu kurz!",
        duration: 5000
      });
      toast.present();
    }
  }

  logout(){
    this.socket.emit('logout');
    this.storage.clear();
    this.user.nickname = null;
  }

  isLoggedIn(){
    this.storage.get('user').then(
      (user) => {
        if(user.nickname){
          this.user = user;
          this.login();
        }
      }
    ).catch(
      (err) => {
        console.log(err);
      }
    );
  }

  private login(){
    this.socket.emit('login', this.user.nickname);
    this.socket.on('list-users', function(users){
      console.log(users);
    });
    this.storage.set('user', this.user);
  }

}
