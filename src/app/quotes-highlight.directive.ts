import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appQuotesHighlight]'
})
export class QuotesHighlightDirective {

  constructor(elem:ElementRef) {
    elem.nativeElement.style.backgroundColor="#a50000"
    elem.nativeElement.style.color="#fff"
    elem.nativeElement.style.fontSize="50px"
   }

}
