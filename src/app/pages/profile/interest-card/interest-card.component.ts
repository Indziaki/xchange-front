import { Component } from '@angular/core';
import { InterestScaleComponent } from '../interests-profile/interest-scale/interest-scale.component';
import { NgFor } from '@angular/common';
import { XcIconAngleLeftBComponent } from '@indziaki/ngx-xchange-icons';
import { HeadlineStylesDirective } from 'projects/ngx-xchange-ui/src/directives/headline-styles/headline-styles.directive';

@Component({
  selector: 'app-interest-card',
  standalone: true,
  imports: [
    InterestScaleComponent,
    NgFor,
    XcIconAngleLeftBComponent,
    HeadlineStylesDirective
  ],
  templateUrl: './interest-card.component.html',
  styleUrl: './interest-card.component.scss'
})
export class InterestCardComponent {
  labels = [
    'Impact',
    'Energy',
    'Resources',
    'Consumer goods',
    'Long term'
  ];

  profiles= [
    { name: 'Profile 1: Impact',    metrics: [5, 5, 4, 3, 2] },
    { name: 'Profile 2: Energy',    metrics: [5, 4, 5, 4, 5] },
    { name: 'Profile 3: Resources', metrics: [4, 3, 4, 3, 4] },
    { name: 'Profile 4: Consumer goods', metrics: [1, 2, 5, 5, 4] },
    { name: 'Profile 5: Long term', metrics: [3, 4, 5, 4, 3] },
  ];

  maxLevel = 5;
}
