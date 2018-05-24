import {NgModule} from '@angular/core';

import {HomeComponent} from './home.component';
import { HeaderComponent } from '../../child-components/header.component';
import { FooterComponent } from '../../child-components/footer.component';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
    ],
    exports: [HomeComponent]
})

export class HomeModule{}