import { Directive,
  HostListener,
  Renderer2,
  OnInit,
  ElementRef ,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor:string='transparent'
 // 01 @Input() highlightColor:string='blue'
  @Input('appBetterHighlight') highlightColor:string='blue'
  
  //01 @HostBinding('style.backgroundColor') backgroundColor:string | any
  // 02 @HostBinding('style.backgroundColor') backgroundColor:string =this.defaultColor
   @HostBinding('style.backgroundColor') backgroundColor:string |any
  
  constructor(private elRef:ElementRef , private renderer:Renderer2) { }
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
    this.backgroundColor=this.defaultColor
  }
  
  @HostListener('mouseenter') mouseover(eventData: Event){
    // 01 this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    // 02 this.backgroundColor='blue';
     this.backgroundColor=this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // 01 this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    // 02this.backgroundColor='transparent';
  this.backgroundColor=this.defaultColor;
}
}
