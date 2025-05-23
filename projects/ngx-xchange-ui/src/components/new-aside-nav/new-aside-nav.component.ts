import { Component } from '@angular/core';
import { RoundedImageModule } from '../rounded-image/rounded-image.module';
import { AsideLinksComponent } from '../aside-links/aside-links.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  XcIconChartComponent,
  XcIconCompassComponent,
  XcIconCrosshairComponent,
  XcIconQuestionCircleComponent,
  XcIconRocketComponent,
  XcIconSettingComponent,
  XcIconStarComponent,
  XcIconUsersAltComponent,
  XcIconWifiComponent,
  XcIconAngleRightComponent,
  XcLogOutIconComponent,
} from '@indziaki/ngx-xchange-icons';
import { RouterLink } from '@angular/router';

type BottomMenuType = 'profile' | 'support' | 'logout' | '';

@Component({
  selector: 'xc-new-aside-nav',
  standalone: true,
  imports: [
    AsideLinksComponent,
    RoundedImageModule,
    NgFor,
    XcIconQuestionCircleComponent,
    XcIconAngleRightComponent,
    NgClass,
    NgIf,
    XcIconCompassComponent,
    XcIconCrosshairComponent,
    XcIconStarComponent,
    XcIconSettingComponent,
    XcIconChartComponent,
    XcIconRocketComponent,
    XcIconWifiComponent,
    XcIconUsersAltComponent,
    RouterLink,
    XcLogOutIconComponent
  ],
  templateUrl: './new-aside-nav.component.html',
  styleUrl: './new-aside-nav.component.css',
})
export class NewAsideNavComponent {
  activeTab: string = 'ecosystem';
  selectedMenu: BottomMenuType = '';

  public users = [
    {
      name: 'John Doe',
      imageUrl:
        'https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b',
      tags: ['Healt', 'Entrepeneur', 'Lorem'],
      description: 'This is a small description of the user',
      collaborations: 2,
      email: 'tester@gmail.com',
      linkedin: 'https://www.linkedin.com/in/john-doe',
    },
  ];

  setActiveTab(tab: string): void {
    this.selectedMenu = '';
    this.activeTab = tab;
  }

  selectMenu(menu: BottomMenuType): void {
    this.selectedMenu = menu;
    this.activeTab = 'ecosystem';
  }
}
