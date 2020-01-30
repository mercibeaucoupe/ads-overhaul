import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-common',
    templateUrl: './common.master.html',
    styleUrls: ['./common.master.less']
})
export class CommonMaster implements OnInit {

    sidebar: string = "opened"

    constructor() {

    }

    ngOnInit() {
        
    }
    
    toggleMenu = (value: string):void => {
        this.sidebar = value
    }
}