import {
  Directive,
  HostListener,
  AfterContentInit,
  AfterViewInit,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[drawerslide]',
})
export class DrawerSlideDirective implements AfterContentInit, AfterViewInit {
  handle;

  sliding = false;
  currentBasis: number;
  currentGrow: number;

  @HostListener('window:mouseup', ['$event'])
  onMouseup(event: MouseEvent) {
    //console.log(event.target);
    this.sliding = false;
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event: MouseEvent) {
    if (event.target === this.handle) {
      this.sliding = true;
      this.currentBasis = parseFloat(
        window.getComputedStyle(this.el.nativeElement).flexBasis
      );
      this.currentGrow = parseFloat(
        window.getComputedStyle(this.el.nativeElement).flexGrow
      );
    }
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    if (this.sliding) {
      /*if (this.currentBasis >= 120) {
        this.currentGrow -= event.movementY * 0.001;
        this.currentBasis -= event.movementY;
        this.renderer.setStyle(
          this.el.nativeElement,
          'flex-basis',
          this.currentBasis + 'px'
        );
        this.renderer.setStyle(
          this.el.nativeElement,
          'flex-grow',
          this.currentGrow
        );
      } else {
        this.currentBasis = 120;
        this.renderer.setStyle(
          this.el.nativeElement,
          'flex-basis',
          this.currentBasis + 'px'
        );
      }*/
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.handle = this.el.nativeElement.querySelector('.handle');
  }

  ngAfterContentInit() {
    console.log(this.handle);
  }
}
