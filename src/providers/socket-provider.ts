import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import * as io from 'socket.io-client';

@Injectable()
export class SocketProvider {

  private _socket: any;

  public constructor(){
    console.log("new instance created");
  }

  public io(hostUrl: string){
    this._socket = io(hostUrl);
  }

  get socket(): any {
    return this._socket;
  }

  set socket(value: any) {
    this._socket = value;
  }
}
