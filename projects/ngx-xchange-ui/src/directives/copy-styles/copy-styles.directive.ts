import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  OnDestroy,
} from '@angular/core';

interface CopyStyle {
  default: Partial<CSSStyleDeclaration>;
}

@Directive({
  selector: '[xcCopyStyles]',
  standalone: true,
})
export class CopyStylesDirective implements OnInit, OnDestroy {
  private el = this.elementRef.nativeElement;
  private listeners: (() => void)[] = [];

  private readonly copyStyles: Record<string, CopyStyle> = {
    'copy-100': {
      default: {
        fontSize: '10px',
        fontWeight: '400',
        lineHeight: '14px',
        color: 'var(--xc-black500)',
        textAlign: 'center',
      },
    },
    'copy-200': {
      default: {
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '16px',
        color: 'var(--xc-black500)',
      },
    },
    'copy-200-gray': {
      default: {
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '16px',
        color: 'var(--xc-grey500)',
        textAlign: 'center',
      },
    },
    'copy-200-error': {
      default: {
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '16px',
        color: 'var(--xc-categories-blocked)',
      },
    },
    'copy-200-bold': {
      default: {
        fontSize: '12px',
        fontWeight: '700',
        lineHeight: '16px',
        color: 'var(--xc-black500)',
        textAlign: 'center',
      },
    },
    'copy-300': {
      default: {
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '20px',
        color: 'var(--xc-black500)',
      },
    },
    'copy-300-bold': {
      default: {
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '20px',
        color: 'var(--xc-black500)',
      },
    },
    'copy-300-gray': {
      default: {
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '20px',
        color: 'var(--xc-grey500)',
      },
    },
    'copy-300-gray-bold': {
      default: {
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '20px',
        color: 'var(--xc-grey500)',
      },
    },
    'copy-400': {
      default: {
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '24px',
        color: 'var(--xc-black500)',
        textAlign: 'start',
      },
    },
    'copy-400-noAlign': {
      default: {
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '24px',
        color: 'var(--xc-black500)',
      },
    },
    'copy-400-bold': {
      default: {
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '24px',
        color: 'var(--xc-black500)',
        textAlign: 'start',
      },
    },
    'copy-400-bold-white': {
      default: {
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '24px',
        color: 'var(--xc-white)',
        textAlign: 'start',
      },
    },
    'copy-500': {
      default: {
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '22px',
        color: 'var(--xc-black500)',
        textAlign: 'center',
      },
    },
    'copy-400-purple': {
      default: {
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '24px',
        color: 'var(--xc-categories-suggestion)',
        textAlign: 'center',
      },
    },
  };

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.applyStyles();
  }

  ngOnDestroy() {
    this.listeners.forEach((removeListener) => removeListener());
  }

  private applyStyles() {
    const matchedClass = (Array.from(this.el.classList) as string[]).find(
      (cls) => this.copyStyles.hasOwnProperty(cls)
    );

    if (!matchedClass) return;

    const styles = this.copyStyles[matchedClass];

    // Apply default styles
    Object.entries(styles.default).forEach(([prop, value]) => {
      this.renderer.setStyle(this.el, prop, value);
    });
  }
}
