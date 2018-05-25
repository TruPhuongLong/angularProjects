import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { CardComponent } from './card.component';
import { EntryInputComponent } from './entry-input.component';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { TextInputComponent } from './text-input/text-input.component';
import { CardFormComponent } from './card-form/card-form.component';

@NgModule({
    declarations: [
        CardComponent,
        EntryInputComponent,
        FooterComponent,
        HeaderComponent,
        TextInputComponent,
        CardFormComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
    ],
    exports: [
        CardComponent,
        EntryInputComponent,
        FooterComponent,
        HeaderComponent,
        TextInputComponent,
        CardFormComponent,
    ]
})

export class ChildModule { }