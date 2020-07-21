import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'dc-panel-content',
  template: '<ng-content></ng-content>',
  styleUrls: ['./dc-panel-content.component.scss'],
  host: {
    class: 'dc-panel-content',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DcPanelContentComponent implements OnInit {
  marginLeft: number = 0;
  marginRight: number = 0;
  marginTop: number = 0;
  marginBottom: number = 0;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  resetMargins() {
    this.marginLeft = 0;
    this.marginRight = 0;
    this.marginTop = 0;
    this.marginBottom = 0;

    this.setMargins();
  }

  setMargins() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'margin-left',
      this.marginLeft + 'rem'
    );

    this.renderer.setStyle(
      this.el.nativeElement,
      'margin-right',
      this.marginRight + 'rem'
    );

    this.renderer.setStyle(
      this.el.nativeElement,
      'margin-top',
      this.marginTop + 'rem'
    );

    this.renderer.setStyle(
      this.el.nativeElement,
      'margin-bottom',
      this.marginBottom + 'rem'
    );
  }

  ngOnInit(): void {}
}
