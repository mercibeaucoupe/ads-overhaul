import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { CommonMaster } from '../common/common.master'

import { HomePage } from '../common/pages/home/home.page'
import { AboutPage } from '../common/pages/about/about.page'

const routes: Routes = [
    {
        path: '',
        component: CommonMaster,
        children: [
            {
                path: '',
                component: HomePage
            },
            {
                path: 'about',
                component: AboutPage
            },
            {
                path: '',
                redirectTo: '',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}