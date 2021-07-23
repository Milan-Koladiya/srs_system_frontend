import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverList = [{name: "TestServer", description: "TestServer1"}];
  constructor() {
  }

  serverCreate(serverDetail: { name: string, description: string }) {
    this.serverList.push({
      name : serverDetail.name, description : serverDetail.description
    })
  }

}
