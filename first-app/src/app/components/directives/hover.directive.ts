import {
    Directive,
    ElementRef,
    Renderer,
    HostListener,
    Input,
    HostBinding,
    OnInit
} from '@angular/core';

@Directive({
    selector: '[tpl-hover]'
})

export class HoverDirective implements OnInit {

    @Input('tpl-hover') styleConfig;
 
    oldStyle;
    newStyle;

    constructor(private e: ElementRef, private render: Renderer) {    }

    ngOnInit(): void {
        // need copy or this is reference: and oldstyle changed: use ... operator:
        this.oldStyle = {...getComputedStyle(this.e.nativeElement)};
        this.newStyle = this.styleConfig ? this.styleConfig : {boxShadow: '2px 2px gray'}  
    }


    @HostListener('mouseover') _onMouseOver() {
        this.changeStyle()
    }

    @HostListener('mouseout') _onMouseOut() {
        this.changeStyle(this.oldStyle);
    }

    changeStyle(style = this.newStyle){
        if(this.newStyle){
            for(const key in this.newStyle){
                this.render.setElementStyle(this.e.nativeElement, key, style[key]);
            }
        }else{
            this.render.setElementStyle(this.e.nativeElement, 'boxShadow', style['boxShadow']);
        }
    }
}