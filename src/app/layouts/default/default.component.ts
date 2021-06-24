import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen= true;
  contentMargin = 240;

  constructor() { }

  ngOnInit(): void { }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;

    if(!this.sideBarOpen){
      this.contentMargin=70;
    }
    else{
      this.contentMargin=240;
    }
  }
}
