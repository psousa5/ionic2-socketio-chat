/**
 * Created by Christian on 15.03.2017.
 */
export class User{
  private _username: string;
  private _socketId: string;

  constructor(username: string, socketId: string) {
    this._username = username;
    this._socketId = socketId;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get socketId(): string {
    return this._socketId;
  }

  set socketId(value: string) {
    this._socketId = value;
  }
}
