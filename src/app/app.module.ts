import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ChatPage } from "../pages/chat/chat";
import { LoginPage } from "../pages/login/login";
import { IonicStorageModule } from '@ionic/storage';
import {SocketProvider} from "../providers/socket-provider";

@NgModule({
  declarations: [
    MyApp,
    ChatPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatPage,
    LoginPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SocketProvider
  ]
})
export class AppModule {}
