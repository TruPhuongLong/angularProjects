import { NgModule } from '@angular/core';

import { CardComponent } from './card.component';
import { EntryInputComponent } from './entry-input.component';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';

@NgModule({
    declarations: [
        CardComponent,
        EntryInputComponent,
        FooterComponent,
        HeaderComponent,
    ],
    exports: [
        CardComponent,
        EntryInputComponent,
        FooterComponent,
        HeaderComponent,
    ]
})

export class ChildModule { }