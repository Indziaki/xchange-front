import { Component, EventEmitter, Output } from '@angular/core';
import { XcIconTimesComponent } from '@indziaki/ngx-xchange-icons';
import { XcIconTrashComponent } from '@indziaki/ngx-xchange-icons';

@Component({
  selector: 'app-suspend-modal',
  standalone: true,
  imports: [XcIconTimesComponent, XcIconTrashComponent],
  templateUrl: './suspend-modal.component.html',
  styleUrl: './suspend-modal.component.scss',
})
export class SuspendModalComponent {
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
