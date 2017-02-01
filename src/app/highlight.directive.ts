import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'white';
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    console.log("Event Target" + event.target);
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  private backgroundColor = 'white';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
  ) {
    //this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'border', '3px solid blue');
  }

}
