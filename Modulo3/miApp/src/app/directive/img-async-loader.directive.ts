import { Directive, ElementRef, AfterViewInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgAsyncLoader]'
})
export class ImgAsyncLoaderDirective implements AfterViewInit{

    imageSrc;
    element;
    tries = 0;
    MAX_TRIES = 3;

  constructor(private el: ElementRef) {
     this.element = el;
   }

   @Input('appImgAsyncLoader') highlightColor: string;

  ngAfterViewInit(): void {
    //Get the source of the given image, and replace ir with the folowing icon
    this.imageSrc = this.element.nativeElement.src
    this.element.nativeElement.src = "asset/loading-50px.svg"
    //Fetch the actual image and assign it to the <img> 's source when finished loading
    fetch(this.imageSrc).then(r => {
      this.element.nativeElement.src = this.imageSrc
    })
    // .catch(err -> {
      //If image fails loading, try again many times
      // if(this.tries <= this.MAX_TRIES) {
      //   this.tries++;
      //   this.ngAfterViewInit();
      // }else{
      //   //Remove the element if it cannot be loaded
      //   console.log("Removing element")
      //   this.element.nativeElement.remove();
      // }
    // })
  }

  @HostListener('mouseenter') onMouseEnter(){
    //Codigo qse ejecuta al ratón entrar en el elemento
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null);
  }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
