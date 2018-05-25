import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template:
        `<div class="header-container">
            <ng-content></ng-content>
        </div>`,
    styles: [`
            .header-container{
                padding: 5px;
            }
        `]
})

export class HeaderComponent { }