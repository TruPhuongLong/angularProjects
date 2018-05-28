import {NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';

import { ApiService } from './api.service';
import { MessageService } from './message.service';

@NgModule({
    imports: [
        HttpModule,
    ],
    providers: [
        ApiService,
        MessageService,
    ]
})

export class ServiceModule{}