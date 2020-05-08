import { Component } from '@angular/core';

import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages: string[] = [];
  message: string;

  constructor(private chatService: ChatService) {}
 
  sendMsg(e: Event): void {
    e.preventDefault();
    this.chatService.sendMsg(this.message);
    this.pushMsg();
    this.message = ''; // clean field
  }

  pushMsg(): void {
    this.messages.push(this.message);
  }
}
