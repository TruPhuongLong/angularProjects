import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template:
        `<div class="footer-container">
            <ng-content></ng-content>
        </div>`,
    styles: [`
            .footer-container{
                padding: 5px;
            }
        `]
})

export class FooterComponent { }