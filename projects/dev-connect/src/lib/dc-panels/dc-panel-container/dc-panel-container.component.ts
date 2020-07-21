import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ContentChildren,
  QueryList,
  Input,
  EventEmitter,
  Output,
  ContentChild,
  AfterViewInit,
  Renderer2,
} from '@angular/core';
import { DrawerPanelComponent } from '../drawer-panel/drawer-panel.component';
import { DcPanelContentComponent } from '../dc-panel-content/dc-panel-content.component';

@Component({
  selector: 'dc-panel-container',
  templateUrl: './dc-panel-container.component.html',
  styleUrls: ['./dc-panel-container.component.scss'],
  host: {
    class: 'dc-panel-container',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DcPanelContainerComponent implements OnInit, AfterViewInit {
  @ContentChildren(DrawerPanelComponent, { descendants: true })
  _allPanels: QueryList<DrawerPanelComponent>;
  _panels = new QueryList<DrawerPanelComponent>();

  @ContentChild(DcPanelContentComponent) _content: DcPanelContentComponent;

  @Input() hasBackdrop = false;

  @Output() readonly backdropClick: EventEmitter<void> = new EventEmitter<
    void
  >();

  backdropClicked() {}

  isShowingBackdrop() {}

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    for (let p of this._allPanels) {
      p.panelToggled.subscribe((open) => {
        if (p.mode === 'over') return;

        if (!open && p.mode === 'slide') {
          if (!p.contentBefore) {
            this._content.resetMargins();
            this._content.marginLeft = p.width * -1;
            this._content.setMargins();
          } else {
            this._content.resetMargins();
            this._content.marginRight = p.width * -1;
            this._content.setMargins();
          }
        } else if (!open && p.mode === 'push') {
          this._content.resetMargins();
          this._content.marginRight = 0;
          this._content.marginLeft = p.width * -1;
          this._content.setMargins();
        } else if (open && p.mode === 'push') {
          this._content.resetMargins();
          this._content.marginRight = p.width * -1;
          this._content.marginLeft = 0;
          this._content.setMargins();
        } else {
          this._content.resetMargins();
        }
      });
    }

    for (let p of this._allPanels) {
      if (!p.showPanel) {
        if (!p.contentBefore) {
          this._content.resetMargins();
          this._content.marginLeft = p.width * -1;

          this._content.setMargins();
        } else if (!p.showPanel && p.mode !== 'over') {
          this._content.resetMargins();
          this._content.marginRight = p.width * -1;
          this._content.setMargins();
        }
      } else {
        if (!p.contentBefore) {
          if (p.mode === 'push') this._content.marginRight = p.width * -1;
        } else {
          if (p.mode === 'push') this._content.marginLeft = p.width * -1;
        }

        this._content.resetMargins();
      }
    }
  }
}
