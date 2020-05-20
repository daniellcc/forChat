import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { ChatService } from '../../services/chat.service';

import { User } from '../../models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private toastr: ToastrService,
              private chatService: ChatService,
              private router: Router) { }

  ngOnInit(): void {
  }

  save(name: string, room: string, modal: HTMLDivElement): void {
    this.toastr.info(`Welcome ${name}`, '', { timeOut: 1300 });
    modal.style.display = 'none';
    this.chatService.saveUser(name, parseInt(room));
    this.chatService.selectRoom(parseInt(room));
    this.router.navigate(['/room', parseInt(room)]);
  }
}
