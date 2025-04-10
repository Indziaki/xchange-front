import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
@Directive({
  selector: '[xcProfileTags]',
  standalone: true,
})
export class ProfileTagsDirective implements OnChanges {
  @Input() xcProfileTags = '';


  private colorMap: Record<string, string> = {
    gray: 'var(--xc-grey100)',
    green: 'var(--xc-Completed)',
    purple: 'var(--xc-Suggestion)',
    yellow: 'var(--xc-Progress)',
    blue:"var(--xc-categories-collaboration)"
  };

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['xcProfileTags']) {
      this.applyColor();
    }
  }

  private applyColor(): void {
    const color = this.xcProfileTags.toLowerCase();
    const backgroundColor = this.colorMap[color] || this.colorMap['default'];


    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      backgroundColor
    );


    const isDarkBackground = ['purple', 'green','blue'].includes(color);
    const textColor = color === 'blue' ? 'var(--xc-data-viz-blue200)' : (isDarkBackground ? 'white' : 'var(--xc-grey500)');
    this.renderer.setStyle(this.el.nativeElement, 'color', textColor);


    this.renderer.setStyle(
      this.el.nativeElement,
      'padding',
      '6px 10px 7px 10px'
    );
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '16px');
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '12px');
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', '700');
  }
}
