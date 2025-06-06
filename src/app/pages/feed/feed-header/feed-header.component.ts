import { Component } from '@angular/core';
import { HeaderBackgroundComponent } from 'projects/ngx-xchange-ui/src/components/header-background/header-background.component';
import { HeaderCardsComponent } from '../header-cards/header-cards.component';
import { RoundedImageModule } from '@indziaki/ngx-xchange-ui';

@Component({
  selector: 'app-feed-header',
  standalone: true,
  imports: [HeaderBackgroundComponent,HeaderCardsComponent,RoundedImageModule],
  templateUrl: './feed-header.component.html',
  styleUrl: './feed-header.component.scss'
})
export class FeedHeaderComponent {

}
