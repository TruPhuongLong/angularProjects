import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { ChildModule } from '../../child-components/child.module';

import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        ChildModule,
        FormsModule,
        CommonModule,
    ],
    exports: [
        HomeComponent
    ], 
})

export class HomeModule{}