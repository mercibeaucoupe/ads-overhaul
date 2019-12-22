import { NgModule } from '@angular/core'
import {
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatCheckboxModule,
} from '@angular/material'

const MaterialModule = [
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatCheckboxModule,
]

@NgModule({
    imports: [MaterialModule],
    exports: [MaterialModule]
})
export class AppMaterialModule {}