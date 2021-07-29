import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', OR YOU CAN DO THIS
  //selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    // method executed at the point of time this component is created by angular 
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

}
