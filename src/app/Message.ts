/**
 * Created by Christian on 24.03.2017.
 */

export class Message{
  text: string;
  from: string;
  to: string;

  constructor(text: string, from: string, to: string) {
    this.text = text;
    this.from = from;
    this.to = to;
  }
}
