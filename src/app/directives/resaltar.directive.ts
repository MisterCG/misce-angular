import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  constructor( private element: ElementRef ) { }

  @Input('appResaltar') newColor: string;

  @HostListener('mouseenter') mouseEnter() {
    this.changeColor( this.newColor );
  }

  @HostListener('mouseleave') mouseLeave() {
    this.changeColor();
  }

  private changeColor( color: string = 'red' ) {
    this.element.nativeElement.style.backgroundColor = color;
  }


}
