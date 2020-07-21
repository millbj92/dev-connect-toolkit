import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ElementRef,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { DragDrop, DragRef } from '@angular/cdk/drag-drop';
@Component({
  selector: '[dc-drawer-list-item]',
  templateUrl: './dc-drawer-list-item.component.html',
  styleUrls: ['./dc-drawer-list-item.component.scss'],
})
export class DcDrawerListItemComponent implements OnInit, AfterViewInit {
  @Input() selectable = false;
  @HostBinding('class.dc-drawer-list-item') private listItemClass = true;
  @HostBinding('class.dc-drawer-list-item-selected') selected = false;
  @HostListener('click') toggleSelected() {
    if (!this.selectable) return;
    console.log('toggling');
    this.selected = !this.selected;
  }

  public dr: DragRef;

  constructor(private _dragDrop: DragDrop, private _ref: ElementRef) {}

  ngOnInit(): void {
    this.dr = this._dragDrop.createDrag(this._ref);
    this.dr.lockAxis = 'y';
  }

  ngAfterViewInit() {}
}
