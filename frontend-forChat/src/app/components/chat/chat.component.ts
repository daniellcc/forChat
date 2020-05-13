import { Component, OnInit, Input } from '@angular/core';

import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() username: string;
  messages: string[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.getMsgs().subscribe(
      data => this.messages.push(data),
      (err: Error) => console.error(err)  
    );
  }

  sendMsg(msg: HTMLInputElement): void {
    this.chatService.sendMsg(msg.value, this.username);
    msg.value = '';
  }
}
