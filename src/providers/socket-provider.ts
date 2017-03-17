import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import * as io from 'socket.io-client';

@Injectable()
export class SocketProvider {

  private socket: any;

  public constructor(){}

  public io(hostUrl: string){
    if(this.socket) return this.socket;
    this.setup(hostUrl);
    return this.socket;
  }

  private setup(hostUrl: string){
    if(!this.socket) this.socket = io(hostUrl);
  }

}
