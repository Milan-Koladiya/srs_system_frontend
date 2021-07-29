import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[better-directive]'
})

export class betterDirective implements OnInit {
    constructor(private elRef: ElementRef, private rendrer: Renderer2) {}

    ngOnInit() {
        this.rendrer.setStyle(this.elRef.nativeElement, "color", "red");  
    }
}