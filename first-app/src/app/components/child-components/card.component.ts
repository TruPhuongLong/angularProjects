import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    template:
        `
        <div class="card-container">
            <app-header>
                <h3>title</h3>
            </app-header>
            <div class="card-content">

            </div>
            <app-footer>
                <i>regard</i>
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
            background-color: grey;
            color: white;
            box-shadow: 2px 2px #F5F5F5;
            margin: 20px;
        }
        
        .card-content{
            flex: 1;
        }
    `]
})

export class CardComponent {
    
}