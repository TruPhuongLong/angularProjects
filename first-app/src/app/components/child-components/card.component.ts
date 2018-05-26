import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    template:
        `
        <div class="card-container">
            <app-header>
                <h3>{{item?.header ? item.header : 'Header'}}</h3>
            </app-header>
            <div class="card-content">
                <ng-content></ng-content>
            </div>
            <app-footer>
                <i>{{item?.footer ? item.footer : 'Footer'}}</i>
            </app-footer>
        </div>
    `,
    styles: [`
        .card-container{
            display: flex;
            flex-direction: column;
            width: 200px;
            height: 300px;
            border-radius: 10px;
            background-color: tomato;
            color: white;
            box-shadow: 2px 2px #F5F5F5;
            padding: 5px 20px;
            margin: 20px;
        }
        
        .card-content{
            flex: 1;
        }
    `]
})

export class CardComponent {
    @Input() item;
}