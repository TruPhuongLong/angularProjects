import {NgModule} from '@angular/core';

import { ChildModule } from '../../child-components/child.module';

import {AboutComponent} from './about.component';

@NgModule({
    declarations: [
        AboutComponent,
    ],
    imports: [
        ChildModule,
    ],
    exports: [
        AboutComponent
    ]
})

export class AboutModule{}