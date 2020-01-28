import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

    navIconState: string = 'active'
    isActive: boolean = true
    year: string = (new Date()).getFullYear().toString()

    @Output()
    toggleMenu = new EventEmitter()

    constructor() {}

    ngOnInit() {}

    toggleNav() {
        if (this.navIconState === 'active') {
            this.navIconState = 'inactive'
            this.toggleMenu.emit('inactive')
            this.isActive = false
        } else {
            this.navIconState = 'active'
            this.toggleMenu.emit('active')
            this.isActive = true
        }
    }
}