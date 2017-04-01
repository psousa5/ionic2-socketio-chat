/**
 * Created by Christian on 24.03.2017.
 */

export class Message{
  text: string;
  sender: string;
  receiver: string;

  constructor(text: string, sender: string, receiver: string) {
    this.text = text;
    this.sender = sender;
    this.receiver = receiver;
  }
}
