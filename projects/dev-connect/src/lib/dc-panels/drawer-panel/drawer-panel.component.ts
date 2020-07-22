import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ElementRef,
  Renderer2,
  Output,
  EventEmitter,
} from '@angular/core';
import { isUndefined } from 'util';
@Component({
  selector: 'dc-drawer-panel',
  templateUrl: './drawer-panel.component.html',
  styleUrls: ['./drawer-panel.component.scss'],
  host: {
    class: 'dc-drawer-panel',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerPanelComponent implements OnInit, OnChanges {
  @Input() height: number = 100;
  @Input() width: number = 25;
  @Input() showPanel: boolean = false;
  @Input() heading: string;
  @Input() mode: string = 'slide';
  @Output() panelToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  contentBefore: boolean;
  positionStyle: Object = {};

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'width', this.width + 'rem');
  }

  drop(event) {
    console.log(event);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!isUndefined(this.contentBefore))
      this.openClose(changes.showPanel.currentValue);
  }

  openClose(open: boolean) {
    if (!this.contentBefore) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'transform',
        open === true ? '' : 'translate3d(-100%, 0,0)'
      );
    } else {
      this.renderer.setStyle(
        this.el.nativeElement,
        'transform',
        open === true ? '' : 'translate3d(100%, 0,0)'
      );
    }
    this.positionStyle['visibility'] = open === true ? 'visible' : 'none';
    this.positionStyle['opacity'] = open === true ? '1' : '0';

    this.panelToggled.emit(open);
  }

  toggle() {
    this.showPanel = !this.showPanel;
    this.openClose(this.showPanel);
  }

  ngOnInit(): void {
    if (
      this.el.nativeElement.previousElementSibling != null &&
      this.el.nativeElement.previousElementSibling.classList.contains(
        'dc-panel-content'
      )
    )
      this.contentBefore = true;
    else this.contentBefore = false;

    this.openClose(this.showPanel);
  }
}
