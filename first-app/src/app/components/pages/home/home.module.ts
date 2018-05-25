import {NgModule} from '@angular/core';

import { ChildModule } from '../../child-components/child.module';

import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        ChildModule,
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule{}