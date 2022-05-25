import { Directive ,ElementRef } from '@angular/core'; //elementref is added

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {
element !: ElementRef;
  constructor(el:ElementRef) { 
 el.nativeElement.style.color = "red";
// this.element=el;

   } //el variable of type elementref is added and el will hold the 
                                 // html varible which will be printed on browser

                                 ngOnInit(){
                                  this.element.nativeElement.innerText = "Hello World" 
                               }
  

}
