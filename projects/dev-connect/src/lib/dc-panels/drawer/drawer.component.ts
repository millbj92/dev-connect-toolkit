import {
  Component,
  OnInit,
  Input,
  HostBinding,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'dc-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit, AfterViewInit {
  @Input() heading;
  @Input() collapsible = false;
  @Input() scrollable = false;
  @Input() draggable = true;
  @HostBinding('class.dc-drawer') drawer = true;
  @HostBinding('class.collapsed') @Input() collapsed = true;

  slideable = false;
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (!this.collapsible) this.collapsed = false;
    if (!this.collapsed) this.slideable = true;
  }

  ngAfterViewInit() {
    //this.cd.detectChanges();
    //console.log(this.handle);
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.slideable = !this.collapsed;
  }

  drop(event) {
    console.log(event);
  }
}
