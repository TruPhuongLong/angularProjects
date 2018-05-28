import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
        ReactiveFormsModule,
    ],
    exports: [
        HomeComponent
    ], 
})

export class HomeModule{}