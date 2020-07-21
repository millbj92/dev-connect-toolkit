import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { DcIcons } from './icons';

@Component({
  selector: 'dc-icon',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input()
  set name(name: string) {
    let inner = `<div style="display: block; width: 100%; height: 100%;">${DcIcons[name]}</div>`;
    this.element.nativeElement.innerHTML = inner || null;
  }

  constructor(private element: ElementRef) {}

  ngOnInit(): void {}
}
