import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

    sidebar: string = "open"

    constructor() {}

    ngOnInit() {

    }

    toggleMenu = (value: string):void => {
        if (value === 'active') {
            this.sidebar = "open"
        } else {
            this.sidebar = "close"
        }
    }
}