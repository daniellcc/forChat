import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})

export class ChatService {
  private socket = io('http://localhost:5000');

  constructor() {}

  sendMsg(msg: string): void {
    this.socket.emit('send message', msg);
    msg = '';
  }

  getMsgs(): Observable<string> {
    return Observable.create(observer => {
      this.socket.on('message', data => {
        observer.next(data)
      });
    });
  }
}
