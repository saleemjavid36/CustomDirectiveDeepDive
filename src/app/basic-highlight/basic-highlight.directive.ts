import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  constructor(private somthing:ElementRef) {
    
   }
  ngOnInit() {
    this.somthing.nativeElement.style.backgroundColor = 'green'
  }

}
