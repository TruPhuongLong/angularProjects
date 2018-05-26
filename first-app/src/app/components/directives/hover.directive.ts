import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[tpl-hover]'
})

export class HoverDirective {
    constructor(private e: ElementRef, private render: Renderer){
        // console.log('=== directive')
        // console.log(e.nativeElement);
        e.nativeElement.style.backgroundColor = "yellow"
        // render.setElementStyle(e.nativeElement, 'backgroundColor', 'yellow');
    }
}