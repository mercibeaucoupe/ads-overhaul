import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { AppMaterialModule } from '../material-modules/material.module'

import { CommonMaster } from 'src/app/common/common.master'

import { HomePage } from 'src/app/common/pages/home/home.page'
import { AboutPage } from 'src/app/common/pages/about/about.page'

import { LoginComponent } from 'src/app/common/components/login/login.component'
import { NavbarComponent } from 'src/app/common/components/navbar/navbar.component'
import { SocialLinkComponent } from 'src/app/common/components/socialLink/socialLink.component'


@NgModule({
    imports: [CommonModule, RouterModule, AppMaterialModule],
    declarations: [
        CommonMaster,
        HomePage,
        AboutPage,
        LoginComponent,
        NavbarComponent,
        SocialLinkComponent,
    ],
    exports: [
        CommonMaster,
        HomePage,
        AboutPage,
        LoginComponent,
        NavbarComponent,
        SocialLinkComponent,
    ]
})
export class AppCommonModule {}