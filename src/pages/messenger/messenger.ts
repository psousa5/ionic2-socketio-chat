import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

/*
  Generated class for the Messenger page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-messenger',
  templateUrl: 'messenger.html'
})
export class MessengerPage {

  private socket: any;
  public messages: any = [];
  public messageText: string;
  private sender: string;
  private receiver: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http
  ) {}

  ionViewDidLoad(){

  }

  ngOnInit(){
    this.socket = this.navParams.get('socket');
    this.sender = this.navParams.get('sender');
    this.receiver = this.navParams.get('receiver');
    this.socket.on('whisper', (message) => {
      if(message.whisper.sender = this.receiver){
        this.messages.push(message.whisper);
        console.log(this.messages);
      }
    });
  }

  public sendWhisper(messageText: string){
    console.log('fired: ' + messageText.length);
    if(messageText.length > 0){
      let whisper = {
        sender: this.navParams.get('sender'),
        receiver: this.navParams.get('receiver'),
        text: messageText
      };
      this.http.post('http://localhost/ionic2-socketio-chat-server/public/whisper', whisper).map(this.extractData)
        .catch(this.handleError)
        .subscribe(
          data => {
            this.messages.push(whisper);
            console.log(this.messages);
            this.messageText = "";
          }
        );
    }
  }

  /**
   * The response object doesn't hold the data in a form the app can use directly.
   * You must parse the response data into a JSON object.
   * @param res
   * @returns {{}}
   */
  private extractData(res: Response) {
    return res.json() || {};
  }

  /**
   * Handles errors
   * @param error
   * @returns {any}
   */
  private handleError(error: Response | any) {
    // We might use a remote logging infrastructure here
    return Observable.throw(error.json());
  }

}
