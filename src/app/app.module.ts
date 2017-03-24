import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ChatPage } from "../pages/chat/chat";
import { IonicStorageModule } from '@ionic/storage';
import { MessengerPage } from "../pages/messenger/messenger";
import {SocketProvider} from "../providers/socket-provider";

@NgModule({
  declarations: [
    MyApp,
    ChatPage,
    MessengerPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatPage,
    MessengerPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
