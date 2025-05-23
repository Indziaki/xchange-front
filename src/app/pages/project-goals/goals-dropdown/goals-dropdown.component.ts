import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { XcIconCalenderComponent, XcIconPlayComponent } from '@indziaki/ngx-xchange-icons';
import {
  ProfileTagsDirective,
  ProjectProgressBarModule,
  RoundedImageModule,
} from '@indziaki/ngx-xchange-ui';
import { ObjectivesDropdownComponent } from './objectives-dropdown/objectives-dropdown.component';
import { DescriptionModalComponent } from '../description-modal/description-modal.component';

@Component({
  selector: 'app-goals-dropdown',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    ProjectProgressBarModule,
    RoundedImageModule,
    XcIconCalenderComponent,
    ProfileTagsDirective,
    ObjectivesDropdownComponent,
    DescriptionModalComponent,
    XcIconPlayComponent
  ],
  templateUrl: './goals-dropdown.component.html',
  styleUrl: './goals-dropdown.component.scss',
})
export class GoalsDropdownComponent {
  dropdownOpen = false;
  isDescription = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  openDescription () {
    this.isDescription = true;
  }
  handleDescritionModalClose () {
    this.isDescription = false;
  }
}
