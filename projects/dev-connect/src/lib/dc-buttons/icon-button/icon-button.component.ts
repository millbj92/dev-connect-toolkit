import {
  Component,
  OnInit,
  Input,
  Renderer2,
  ElementRef,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  ContentChild,
  ViewChild,
  AfterContentInit,
} from '@angular/core';
import { isUndefined } from 'util';
import { ThemeService } from '../../core/theme.service';
import { IconComponent } from '../../dc-icon/icon/icon.component';

@Component({
  selector: '[dc-icon-button]',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent
  implements OnInit, OnChanges, AfterViewInit, AfterContentInit {
  @Input() color = undefined;
  @Input() disabled: boolean = false;
  @Input() flat: boolean = false;
  @Input() noHover: boolean = false;

  @ContentChild(IconComponent) icon: ElementRef;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (this.noHover) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'transform',
        'scale(1) translateY(0)'
      );
    }

    if (this.flat) {
      this.renderer.setStyle(this.el.nativeElement, 'box-shadow', 'none');
    }

    if (!isUndefined(this.color) && !this.disabled) {
      const mColor = this.themeService.getCurrentTheme()[
        this.color.toLowerCase()
      ];
      this.renderer.setStyle(
        this.el.nativeElement,
        'background-color',
        isUndefined(mColor) ? this.color : mColor
      );
    } else if (this.disabled) {
      const mBG = this.themeService.getCurrentTheme()['disabledBackground'];
      this.renderer.setStyle(this.el.nativeElement, 'background-color', mBG);
      this.renderer.setStyle(this.el.nativeElement, 'pointer-events', 'none');
    } else if (isUndefined(this.color)) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'background-color',
        'transparent'
      );
    }
  }

  ngAfterContentInit() {
    const icon = this.el.nativeElement.querySelector('dc-icon');
    this.renderer.setStyle(icon, 'width', '50%');
    this.renderer.setStyle(icon, 'height', '50%');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.noHover) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'transform',
        'scale(1) translateY(0)'
      );
    }

    if (!isUndefined(changes.color) && !this.disabled) {
      const mColor = this.themeService.getCurrentTheme()[
        this.color.toLowerCase()
      ];
      this.renderer.setStyle(
        this.el.nativeElement,
        'background-color',
        isUndefined(mColor) ? this.color : mColor
      );
    }

    if (this.disabled) {
      const mBG = this.themeService.getCurrentTheme()['disabledBackground'];
      this.renderer.setStyle(this.el.nativeElement, 'background-color', mBG);
      this.renderer.setStyle(this.el.nativeElement, 'pointer-events', 'none');
    } else if (!isUndefined(this.color)) {
      const mColor = this.themeService.getCurrentTheme()[
        this.color.toLowerCase()
      ];
      this.renderer.setStyle(
        this.el.nativeElement,
        'background-color',
        isUndefined(mColor) ? this.color : mColor
      );

      this.renderer.setStyle(this.el.nativeElement, 'pointer-events', '');
    }
  }
}
