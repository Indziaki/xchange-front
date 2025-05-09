import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[xcButton400]',
  standalone: true
})
export class Button400Directive {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle();
  }

  private setStyle() {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'flex');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '8px');
    this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid var(--xc-grey100)');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '8px 14px');
    this.renderer.setStyle(this.el.nativeElement, 'stroke', 'black');
  }
}
