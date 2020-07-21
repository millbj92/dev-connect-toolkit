import {
  Component,
  OnInit,
  Input,
  ElementRef,
  AfterContentInit,
  QueryList,
  ContentChildren,
  ViewChildren,
  AfterViewInit,
} from '@angular/core';
import { DragDrop, DropListRef, moveItemInArray } from '@angular/cdk/drag-drop';
import { DcDrawerListItemComponent } from './dc-drawer-list-item/dc-drawer-list-item.component';
import { isUndefined } from 'util';

@Component({
  selector: '[dc-drawer-list]',
  templateUrl: './dc-drawer-list.component.html',
  styleUrls: ['./dc-drawer-list.component.scss'],
})
export class DcDrawerListComponent
  implements OnInit, AfterContentInit, AfterViewInit {
  @Input() data: any[];
  @Input() draggable: boolean = false;
  @ContentChildren(DcDrawerListItemComponent)
  items: QueryList<DcDrawerListItemComponent>;

  @ViewChildren(DcDrawerListItemComponent)
  dataItems: QueryList<DcDrawerListItemComponent>;

  private dropList: DropListRef;

  constructor(private _dragDrop: DragDrop, private _ref: ElementRef) {}

  ngOnInit(): void {
    if (this.draggable)
      this.dropList = this._dragDrop.createDropList(this._ref);
  }

  ngAfterContentInit() {
    if (!this.draggable) {
      for (let i of this.items) {
        i.dr.disabled = true;
      }
      return;
    }
    if (!isUndefined(this.items)) {
      console.log(this.items);
      this.dropList.withItems(
        this.items.map((i) => {
          return i.dr;
        })
      );
    }
    this.items.changes.subscribe((change) => {
      this.dropList.withItems(
        change._results.map((i) => {
          return i.dr;
        })
      );
    });

    this.dropList.dropped.subscribe((event) => {
      moveItemInArray(this.data, event.previousIndex, event.currentIndex);
    });
  }

  ngAfterViewInit() {
    this.dataItems.changes.subscribe((change) => {
      this.dropList.withItems(
        change._results.map((i) => {
          return i.dr;
        })
      );
    });
  }

  drop(event) {
    console.log(event);
  }
}
