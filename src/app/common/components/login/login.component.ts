import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

    navIconState: string = 'opened'
    isActive: boolean = true
    year: string = (new Date()).getFullYear().toString()

    @Output()
    toggleMenu = new EventEmitter()

    constructor() {}

    ngOnInit() {}

    toggleNav() {
        if (this.navIconState === 'opened') {
            this.navIconState = 'closed'
            this.toggleMenu.emit('closed')
            this.isActive = false
        } else {
            this.navIconState = 'opened'
            this.toggleMenu.emit('opened')
            this.isActive = true
        }
    }
}