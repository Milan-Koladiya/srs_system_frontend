import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server-create',
  templateUrl: './server-create.component.html',
  styleUrls: ['./server-create.component.css']
})
export class ServerCreateComponent implements OnInit {
  serverName: string =  "";
  serverDes: string = "";

  @Output() serverCreateMan = new EventEmitter<{name: String, description: String}>();

  constructor() { }

  ngOnInit(): void {
  }

  handleServerCreate() {
    this.serverCreateMan.emit({name: this.serverName, description: this.serverDes})
  }

}
