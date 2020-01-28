import { NgModule } from '@angular/core'
import {
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatCheckboxModule,
    MatDividerModule,
} from '@angular/material'

const MaterialModule = [
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatCheckboxModule,
    MatDividerModule
]

@NgModule({
    imports: [MaterialModule],
    exports: [MaterialModule]
})
export class AppMaterialModule {}