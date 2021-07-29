import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {
  @Input() server: {name: string, description: string};

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
