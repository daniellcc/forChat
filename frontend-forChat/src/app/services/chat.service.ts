import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';

import { Observable } from 'rxjs';

import { User } from '../models/user';
 
@Injectable({
  providedIn: 'root'
})

export class ChatService {
  private socket = io('http://localhost:5000');

  private user: User;

  constructor() {}

  saveUser(name: string, room: number): void {
    this.user = {
      name: name, 
      room: room
    };
  }

  getUser(): User {
    return this.user
  }

  selectRoom(room: number): void {
    this.socket.emit('selected room', room);
  }

  sendMsg(msg: string, user: string): void {
    this.socket.emit('send message', {
      message: msg,
      username: user
    });
  }

  getMsgs(): Observable<string> {
    return Observable.create(observer => {
      this.socket.on('message', data => {
        observer.next(data);
      });
    });
  }
}
