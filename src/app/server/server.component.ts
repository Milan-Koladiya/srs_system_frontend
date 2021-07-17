import { Component, OnInit } from "@angular/core";

@Component ({
    selector: "App-Server",
    templateUrl: "./server.component.html" 
})

export class ServerComponent implements OnInit {
    componentTitle = "This is App component";
    propertyBindingButton = true;
    constructor() {
        setTimeout(() => {
            this.propertyBindingButton = false;
            this.componentTitle = "Title Changed";
        }, 3000)
    }

    ngOnInit() {
        console.log("OnInit function Calledd It is same as componentDidMount in react");
    }
}