import {NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';

import { ApiService } from './api.service';
import { MessageService } from './message.service';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@NgModule({
    imports: [
        HttpModule,
    ],
    providers: [
        ApiService,
        MessageService,
        AuthService,
        UserService,
    ]
})

export class ServiceModule{}