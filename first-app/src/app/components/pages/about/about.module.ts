import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import { ChildModule } from '../../child-components/child.module';

import {AboutComponent} from './about.component';
import { ApiService } from '../../../services/api.service';

@NgModule({
    declarations: [
        AboutComponent,
    ],
    imports: [
        ChildModule,
        FormsModule,
    ],
    exports: [
        AboutComponent
    ]
})

export class AboutModule{}