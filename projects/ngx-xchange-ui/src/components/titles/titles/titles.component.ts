import { Component, Input } from '@angular/core';

@Component({
  selector: 'xc-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent {
@Input()
title: String;
type: String;

constructor() {
  this.title = "";
  this.type = "";
}
}
