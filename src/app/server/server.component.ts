import { Component, OnInit } from "@angular/core";

@Component ({
    selector: "App-Server",
    templateUrl: "./server.component.html" 
})

export class ServerComponent implements OnInit {
    componentTitle = "This is App component";
    propertyBindingButton = true;
    eventbinding = "";
    handleChangeData = "";
    serverStatus = false;
    constructor() {
        setTimeout(() => {
            this.propertyBindingButton = false;
            this.componentTitle = "Title Changed";
        }, 3000)
    }

    ngOnInit() {
        console.log("OnInit function Calledd It is same as componentDidMount in react");
    }

    buttonClicked() {
        this.eventbinding = "Button Clicked with event binding";
    }

    handleChange(event: any) {
        this.handleChangeData = event.target.value 
    }

    changeServerStatus() {
        this.serverStatus = true;
    }
}