import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[basic-directive]'
})

export class basicDirective implements OnInit {
    constructor(public elRef: ElementRef) {}

    ngOnInit() {
        this.elRef.nativeElement.style.background = "green"
    }
}