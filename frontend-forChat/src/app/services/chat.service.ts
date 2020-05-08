import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }

  sendMsg(msg: string): void {
    this.socket.emit('new message', msg);
  }

  getMsg() {
    return this.socket
      .fromEvent("message").subscribe((data: any) => data.msg)
  }
}
