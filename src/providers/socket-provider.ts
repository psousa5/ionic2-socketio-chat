import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import * as io from 'socket.io-client';

@Injectable()
export class SocketProvider {

  private socket_instance: any;

  public constructor(){}

  public io(hostUrl: string){
    this.socket_instance = io(hostUrl);
  }

  public socket(){
    return this.socket_instance;
  }

}
