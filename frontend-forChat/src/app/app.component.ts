import { Component, OnInit } from '@angular/core';

import { ChatService } from './services/chat.service';
import { Subscribable, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user: string;
  messages = [];
  sub: Subscription;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.sub = this.chatService.getMsgs().subscribe(
      data => this.messages.push(data),
      (err: Error) => console.error(err),
      () => console.log(this.sub)
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  sendMsg(msg: string): void {
    this.chatService.sendMsg(msg);
  }

  
}
