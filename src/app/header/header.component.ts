import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapse: boolean = true;

  showFiller:boolean = false;
  flippedArrow:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  flipArrow() {
    this.flippedArrow = !this.flippedArrow;
  }

}
