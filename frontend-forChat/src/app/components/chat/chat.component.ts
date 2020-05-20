import { Component, OnInit } from '@angular/core';

import { ChatService } from '../../services/chat.service';

import { User } from '../../models/user';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  user: User;

  messages: User[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.user = this.chatService.getUser();

    this.chatService.getMsgs().subscribe(
      (data: any) => this.messages.push(data),
      (err: Error) => console.error(err)  
    );
  }

  sendMsg(msg: HTMLInputElement): void {
    this.chatService.sendMsg(msg.value, this.user.name);
    msg.value = '';
  }
}
