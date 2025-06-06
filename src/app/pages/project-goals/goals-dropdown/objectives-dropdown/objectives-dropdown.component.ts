import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { XcIconAngleUpComponent } from '@indziaki/ngx-xchange-icons';

@Component({
  selector: 'app-objectives-dropdown',
  standalone: true,
  imports: [
    NgIf,
    XcIconAngleUpComponent
  ],
  templateUrl: './objectives-dropdown.component.html',
  styleUrl: './objectives-dropdown.component.scss'
})
export class ObjectivesDropdownComponent {

  isOpen: boolean = false;

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }
}
