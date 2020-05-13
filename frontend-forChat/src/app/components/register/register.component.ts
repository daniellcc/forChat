import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() username = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  saveName(modal: HTMLDivElement, name: string): void {
    modal.style.display = 'none'; // hide modal
    this.username.emit(name);
  }
}
