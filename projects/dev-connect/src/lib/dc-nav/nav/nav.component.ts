import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { ThemeService } from '../../core/theme.service';
import { isUndefined } from 'util';

@Component({
  selector: '[dc-nav]',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() color: string;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    if (!isUndefined(this.color)) {
      const mColor = this.themeService.getCurrentTheme()[
        this.color.toLowerCase()
      ];
      this.renderer.setStyle(
        this.el.nativeElement,
        'background-color',
        isUndefined(mColor) ? this.color : mColor
      );
    }
  }
}
