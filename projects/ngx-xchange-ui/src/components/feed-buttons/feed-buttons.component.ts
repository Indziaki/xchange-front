import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'xc-feed-buttons',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './feed-buttons.component.html',
  styleUrls: ['./feed-buttons.component.css']
})
export class FeedButtonsComponent {
  options = [
    { name: 'Objectives', notification: false },
    { name: 'Assignments', notification: true },
    { name: 'Announcements', notification: false },
    { name: 'Next steps', notification: true }
  ];

  activeOption: string | null = null;

  toggleActive(optionName: string) {
    this.activeOption = this.activeOption === optionName ? null : optionName;
  }
}
