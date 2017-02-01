import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    console.log("Event Target" + event.target);
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  @Input() defaultColor = 'white';
  @Input('dirHighlight') highlightColor = 'green';

  private backgroundColor: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
  ) {
    //this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'border', '3px solid blue');
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor
  }

}
